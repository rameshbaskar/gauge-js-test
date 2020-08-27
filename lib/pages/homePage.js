const browser = require('../core/browser');

// Elements
const tbSearch = '$[name="q"]';

// Ops
async function search(term) {
  console.log(`Searching for term: ${term}`);
  await browser.writeInto(tbSearch, term);
  await browser.press('Enter');
}

module.exports = {
  search
}
