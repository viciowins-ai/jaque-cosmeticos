const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
    try {
        const browser = await chromium.launch();
        const page = await browser.newPage();
        await page.goto('https://minhaloja.grupoboticario.com.br/jaquelin', {waitUntil: 'networkidle'});
        
        // Wait a bit to ensure products load
        await page.waitForTimeout(2000);
        
        // Em vez de só SVG, procurar ribbons
        const ribbonSvgs = await page.$$eval('svg', elements => {
            return elements.map(e => e.outerHTML).filter(h => h.includes('path'));
        });
        
        fs.writeFileSync('svgs_dump.txt', ribbonSvgs.join('\n\n---SVG---\n\n'));
        console.log("SVGs dumped!");
        await browser.close();
    } catch(e) {
        console.error(e);
        process.exit(1);
    }
})();
