import puppeteer from 'puppeteer';
import path from 'path';

const ARTIFACT_DIR = 'C:/Users/abish/.gemini/antigravity/brain/86baea1c-8fa9-479b-847d-01582a9a28cd';

async function run() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });

  // Wait 1 second for fonts and imagery to settle
  await new Promise(r => setTimeout(r, 1000));

  // Screenshot 1: Initial Rhombus State
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'hero_stage1_rhombus.png') });
  console.log('Saved hero_stage1_rhombus.png');

  // Scroll to Hexagon Phase (~1100px)
  await page.evaluate(() => window.scrollTo({ top: 1100, behavior: 'instant' }));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'hero_stage2_hexagon.png') });
  console.log('Saved hero_stage2_hexagon.png');

  // Scroll to Aperture Phase (~2200px)
  await page.evaluate(() => window.scrollTo({ top: 2200, behavior: 'instant' }));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'hero_stage3_aperture.png') });
  console.log('Saved hero_stage3_aperture.png');

  await browser.close();
  console.log('All screenshots completed successfully!');
}

run().catch(console.error);
