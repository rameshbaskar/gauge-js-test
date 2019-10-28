/* globals gauge*/
"use strict";
const { openBrowser,write, click,waitFor, closeBrowser, goto, press, text, reload, inputField, toRightOf } = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';


beforeSuite(async () => {
    console.log(" -------- Begin Execution --------- ");
    await openBrowser({ headless: headless });
});

afterSuite(async () => {
    console.log(" -------- Done Executing --------- ");
    await closeBrowser();
});

step("Verify if page contains <content>", async (content) => {
    assert.ok(await text(content).exists());
});

step("Goto Home Page", async () => {
    await goto('http://www.google.co.in/');
});

step ("Reload page"), async() => {
    await reload();
}



