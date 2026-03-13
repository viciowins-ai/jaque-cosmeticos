const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
    try {
        const browser = await chromium.launch();
        const page = await browser.newPage();
        await page.goto('https://minhaloja.grupoboticario.com.br/jaquelin', {waitUntil: 'networkidle'});
        
        await page.waitForTimeout(2000);
        
        const imgs = await page.$$eval('img', els => els.map(e => e.src));
        
        fs.writeFileSync('imgs_dump.txt', imgs.join('\n'));
        console.log("Images dumped!");
        await browser.close();
    } catch(e) {
        console.error(e);
        process.exit(1);
    }
})();
