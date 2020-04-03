const homePage = require('../lib/pages/homePage.js');
const driver = require('../lib/pages/driver.js');

step("Goto Home Page", async () => {
    await driver.visitPage("https://www.google.com/");
    await driver.takeASnap();
});

step("Search for <content>", async (content) => {
    await homePage.searchFor(content);
});
