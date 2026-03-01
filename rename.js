const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
    });
}

walkDir(srcDir, function (filePath) {
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;

    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Replacements
    content = content.replace(/ARYAVART\s*1\.0/g, 'TECH AARAMBH 2.0');
    content = content.replace(/Aryavarta\s*1\.0/g, 'Tech Aarambh 2.0');
    content = content.replace(/Aryavart\s*1\.0/g, 'Tech Aarambh 2.0');
    content = content.replace(/ARYAVART/g, 'TECH AARAMBH');
    content = content.replace(/Aryavarta/g, 'Tech Aarambh');
    content = content.replace(/Aryavart/g, 'Tech Aarambh');
    content = content.replace(/aryavarta@aravali\.edu\.in/g, 'info@aravali.edu.in'); // just generic for now or keep original (will replace to info)

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    }
});
