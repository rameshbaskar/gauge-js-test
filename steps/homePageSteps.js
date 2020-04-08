const HomePage = require('../lib/pages/homePage');
const Browser = require('../lib/core/browser');

const browser = new Browser();
const homePage = new HomePage();

step("Goto Home Page", async () => {
    await homePage.visit("https://www.google.com/");
    await browser.takeASnap();
});

step("Search for <content>", async (content) => {
    await homePage.search(content);
});
