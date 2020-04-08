const Browser = require('../lib/core/browser');
const assert = require('assert');
const fs = require('fs');

const browser = new Browser();

beforeSuite(async () => {
    console.log('Preparing some basic folders...');
    var screenshotsDir = 'logs/screenshots';
    if(!fs.existsSync(screenshotsDir)) {
        fs.mkdirSync(screenshotsDir);
    }
    
    console.log(" -------- Begin Execution --------- ");
    await browser.launch();
});

afterSuite(async () => {
    console.log(" -------- Done Executing --------- ");
    await browser.quit();
});

step("Verify if page contains <content>", async (content) => {
    assert.ok(await browser.hasContent(content));
});

step("Reload page", async () => {
    await browser.refresh();
});
