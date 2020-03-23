const { openBrowser, closeBrowser, text, reload } = require('taiko');
const assert = require('assert');
const headless_flag = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    console.log(" -------- Begin Execution --------- ");
    await openBrowser({ headless: headless_flag });
});

afterSuite(async () => {
    console.log(" -------- Done Executing --------- ");
    await closeBrowser();
});

step("Verify if page contains <content>", async (content) => {
    assert.ok(await text(content).exists());
});

step("Reload page", async() => {
    await reload();
});
