const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
    try {
        const browser = await chromium.launch();
        const page = await browser.newPage();
        await page.goto('https://minhaloja.grupoboticario.com.br/jaquelin', {waitUntil: 'networkidle'});
        
        await page.waitForTimeout(3000);

        // Take a screenshot for reference
        await page.screenshot({ path: 'site_pronta_entrega.png', fullPage: true });

        // Get all product cards with their details
        const products = await page.evaluate(() => {
            const results = [];
            
            // Find all product cards in the page
            const cards = document.querySelectorAll('[class*="card"], [class*="product"], [class*="shelf"]');
            
            // Get all img elements with product images
            const imgEls = document.querySelectorAll('img[src*="cloudinary"], img[src*="e-boticario"], img[src*="sgi.e-boticario"]');
            
            imgEls.forEach(img => {
                const card = img.closest('[class*="card"]') || img.closest('article') || img.closest('li') || img.closest('div[class]');
                if (card) {
                    // Find nearby text
                    const name = card.querySelector('[class*="name"], [class*="title"], h2, h3, p')?.textContent?.trim();
                    const price = card.querySelector('[class*="price"], [class*="valor"]')?.textContent?.trim();
                    const flag = card.querySelector('img[src*="flags"], img[src*="flag"]')?.src;
                    
                    results.push({
                        image: img.src,
                        name: name || 'N/A',
                        price: price || 'N/A',
                        flag: flag || 'N/A',
                        html: card.innerHTML.substring(0, 500)
                    });
                }
            });
            
            return results;
        });

        // Also get text content from the page around "pronta-entrega"
        const pageText = await page.evaluate(() => {
            return document.body.innerText.substring(0, 5000);
        });
        
        fs.writeFileSync('pronta_entrega_products.json', JSON.stringify(products, null, 2));
        fs.writeFileSync('page_text.txt', pageText);
        console.log(`Found ${products.length} products`);
        await browser.close();
    } catch(e) {
        console.error(e.message);
        process.exit(1);
    }
})();
