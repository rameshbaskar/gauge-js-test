const expect = require('chai').expect;
const Browser = require('../lib/core/browser');
const homePage = require('../lib/pages/homePage');

describe('Home page', function () {
  before('Launch the browser', async function () {
    await Browser.open();
    await Browser.visit('https://www.google.com/');
  });

  after('Close the browser', async function () {
    await Browser.close();
  });

  it('should be able to search for a term', async function () {
    await homePage.searchFor('Taiko');
    expect(await homePage.isSearched('Taiko - Wikipedia')).to.be.true;
  });
});
