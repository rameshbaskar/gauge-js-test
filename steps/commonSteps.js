const browser = require('../lib/core/browser');
const assert = require('assert');
const fs = require('fs');

beforeSuite(async () => {
    console.log('Preparing some basic folders...');
    let screenshotsDir = 'logs/screenshots';
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
