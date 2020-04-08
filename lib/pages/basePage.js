const { goto } = require('taiko');

class BasePage {
  constructor() {}

  async visit(url) {
    console.log(`Navigating to URL: ${url}`);
    await goto(url);
  }
}

module.exports = BasePage;
