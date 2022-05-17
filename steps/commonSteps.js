const Browser = require('../lib/core/browser');
const taiko = require('taiko');
const assert = require('assert');
const fs = require('fs');

beforeSuite(async () => {
    console.log('Preparing some basic folders...');
    let screenshotsDir = 'logs/screenshots';
    if(!fs.existsSync(screenshotsDir)) {
        fs.mkdirSync(screenshotsDir);
    }
    
    console.log(" -------- Begin Execution --------- ");
    await taiko.openBrowser();
});

afterSuite(async () => {
    console.log(" -------- Done Executing --------- ");
    await taiko.closeBrowser();
});

step("Verify if page contains <content>", async (content) => {
    assert.ok(await browser.hasContent(content));
});

step("Reload page", async () => {
    await browser.refresh();
});
