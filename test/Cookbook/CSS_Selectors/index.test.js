/**
 * @jest-environment puppeteer
 */
 const ShellJS = require('shelljs');
 const path = require('path');
 require('expect-puppeteer');
 
 // Create the index.html file to test
 ShellJS.exec(`extwee -c -s dist/snowman-2.2.0-format.js -i ${path.join(__dirname, 'index.twee')} -o ${path.join(__dirname, 'index.html')}`);
  
 describe('Cookbook - CSS Selectors', () => {
   beforeAll(async () => {
     await page.goto(`file://${path.join(__dirname, 'index.html')}`);
   });

   afterAll(async () => {
    ShellJS.rm(`${path.join(__dirname, 'index.html')}`);
   });
 
   it('Should have border color of red', async () => {
        await page.click('[data-passage="Second"]');
        await expect(page).toMatch('This passage also has a red border.');
   });
 });