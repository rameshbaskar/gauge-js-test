const driver = require('../lib/pages/driver.js');
const assert = require('assert');
const fs = require('fs');

beforeSuite(async () => {
    console.log('Preparing some basic folders...');
    var screenshotsDir = 'logs/screenshots';
    if(!fs.existsSync(screenshotsDir)) {
        fs.mkdirSync(screenshotsDir);
    }
    
    console.log(" -------- Begin Execution --------- ");
    await driver.launchBrowser();
});

afterSuite(async () => {
    console.log(" -------- Done Executing --------- ");
    await driver.quit();
});

step("Verify if page contains <content>", async (content) => {
    assert.ok(await driver.hasContent(content));
});

step("Reload page", async () => {
    await driver.refresh();
});
