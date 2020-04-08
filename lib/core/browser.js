const { openBrowser, closeBrowser, reload, screenshot, text } = require('taiko');

class Browser {
  constructor() {}

  async launch() {
    console.log('Opening browser...');
    console.log('Checking the browser mode...');
    var headless_flag = process.env.headless_chrome === true;
    console.log(`Headless flag: ${headless_flag}`);
    await openBrowser({headless: headless_flag});
  }

  async quit() {
    console.log('Closing browser...');
    await closeBrowser();
  }

  async takeASnap() {
    console.log('Taking screenshot...');
    var fileName = `screenshot-${new Date().getTime()}.png`;
    await screenshot({path: `logs/screenshots/${fileName}`});
  }

  async refresh() {
    console.log('Refreshing page...');
    await reload();
  }

  async hasContent(content) {
    console.log(`Checking if page has the text: ${content}`);
    return await text(content).exists();
  }
}

module.exports = Browser;
