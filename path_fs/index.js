const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir) {
    for(let file in files) {
        const fullpath = path.resolve(rootDir, file)
        const stats = await fs.stat(fullpath);
        console.log(file);
    }
}

readdir('/home/')