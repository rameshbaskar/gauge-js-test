const Browser = require('../core/browser');

class HomePage {
  constructor() {
    this.tbSearch = 'input[name="q"]';
  }

  async searchFor(text) {
    await Browser.writeInto(this.tbSearch, text);
    await Browser.pressKey('Enter');
  }

  async isSearched(text) {
    return Browser.hasContent(text);
  }
}

module.exports = new HomePage();
