const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', '.next', 'server', 'app');
const scriptContent = fs.readFileSync(path.join(__dirname, '..', 'public', 'dashboard-console-capture.js'), 'utf8');

function injectScript(htmlContent) {
  const scriptTag = `<script>${scriptContent}</script>`;
  return htmlContent.replace('</head>', `${scriptTag}</head>`);
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(filePath, 'utf8');
      if (!content.includes('dashboard-console-capture')) {
        content = injectScript(content);
        fs.writeFileSync(filePath, content);
        console.log(`Injected console capture script into ${filePath}`);
      }
    }
  });
}

if (fs.existsSync(distDir)) {
  processDirectory(distDir);
  console.log('Console capture script injection complete');
} else {
  console.log('Build directory not found. Run build first.');
}