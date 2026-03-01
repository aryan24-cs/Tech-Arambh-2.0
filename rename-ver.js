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
    if (!filePath.endsWith('.tsx')) return;

    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // We only want to replace 1.0 -> 2.0 when it is related to the title.
    // Replace 1.0 when preceded by TECH AARAMBH, or inside styling tags directly following TECH AARAMBH

    // In Footer.tsx, Navbar.tsx, LoadingScreen.tsx:
    // TECH AARAMBH <span className="text-tech-blue">1.0</span>
    content = content.replace(/TECH AARAMBH\s*<span[^>]*>\s*1\.0\s*<\/span>/g, match => match.replace('1.0', '2.0'));

    // In Hero.tsx:
    // <span className="text-white">TECH AARAMBH</span>
    // <span className="text-tech-blue ml-2 relative">
    //     1.0
    if (filePath.includes('Hero.tsx')) {
        content = content.replace(/1\.0/g, '2.0');
        // also change V.1 to V.2 to be consistent if present
        content = content.replace(/V\.1/g, 'V.2');
    }

    // In Register.tsx:
    // <span className="text-[#DF971B]">1.0</span>
    if (filePath.includes('Register.tsx')) {
        content = content.replace(/1\.0/g, '2.0');
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated 1.0 to 2.0 in ${filePath}`);
    }
});
