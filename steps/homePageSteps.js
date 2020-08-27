const homePage = require('../lib/pages/homePage');
const browser = require('../lib/core/browser');

step("Goto Home Page", async () => {
    await homePage.visit("https://www.google.com/");
    await browser.takeASnap();
});

step("Search for <content>", async (content) => {
    await homePage.search(content);
});
