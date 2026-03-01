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
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts') && !filePath.endsWith('.css')) return;

    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Replace color variables and utility classes
    content = content.replace(/tech-red/g, 'tech-blue');
    content = content.replace(/text-glow-red/g, 'text-glow-blue');

    // In globals.css, if we already have it updated
    if (filePath.endsWith('globals.css')) {
        // we might have already changed the tech-red to tech-blue above, let's also fix the comment
        content = content.replace(/Kept name tech-red to avoid mass find-replace in classes, but value is Blue/, 'Blue accent color');
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated colors in ${filePath}`);
    }
});
