const { write, into, press } = require('taiko');
const BasePage = require('../pages/basePage');

class HomePage extends BasePage {
  constructor() {
    super();
    this.tbSearch = "$[name='q']";
  }

  async search(term) {
    console.log(`Searching for term: ${term}`);
    await write(term, into(this.tbSearch));
    await press('Enter');
  }
}

module.exports = HomePage;
