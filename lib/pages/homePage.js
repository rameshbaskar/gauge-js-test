const { write, into, press, text } = require('taiko');

async function searchFor(term) {
  console.log(`Searching for term: ${term}`);
  await write(term, into(this.tbSearch));
  await press('Enter');
}

module.exports = {
  searchFor
}
