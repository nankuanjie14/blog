const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');
const TurndownService = require('turndown');

const articlesDir = path.join(__dirname, 'articles');
const turndownService = new TurndownService();

fs.readdir(articlesDir, (err, files) => {
    if (err) {
        return console.error('Unable to scan directory: ' + err);
    }

    files.forEach((file) => {
        if (path.extname(file) === '.docx') {
            const filePath = path.join(articlesDir, file);
            const fileName = path.basename(file, '.docx');
            
            mammoth.convertToHtml({path: filePath})
                .then((result) => {
                    const html = result.value; // The generated HTML
                    const markdown = turndownService.turndown(html);
                    
                    const frontMatter = `---
layout: default
title: "${fileName}"
---

`;
                    const finalContent = frontMatter + markdown;
                    const outputPath = path.join(articlesDir, `${fileName}.md`);
                    
                    fs.writeFile(outputPath, finalContent, (err) => {
                        if (err) throw err;
                        console.log(`Converted ${file} to ${fileName}.md`);
                    });
                })
                .catch((err) => {
                    console.error(`Error converting ${file}:`, err);
                });
        }
    });
});
