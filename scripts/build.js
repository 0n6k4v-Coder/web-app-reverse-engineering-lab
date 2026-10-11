const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'src/page.html');
const output = path.join(root, 'index.html');
const componentDir = path.join(root, 'src/components');

const template = fs.readFileSync(source, 'utf8');
const html = template.replace(/<!-- @component ([^ ]+) -->/g, (_, name) => {
  const file = path.join(componentDir, name + '.html');
  if (!fs.existsSync(file)) throw new Error('Missing component: ' + name);
  return fs.readFileSync(file, 'utf8').trim();
});

fs.writeFileSync(output, html);
console.log('Built index.html successfully from src/page.html + src/components/*.html');
