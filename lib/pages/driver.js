const { goto, openBrowser, closeBrowser, reload, text, screenshot } = require('taiko');

async function visitPage(url) {
  console.log(`Navigating to URL: ${url}`);
  await goto(url);
}

async function launchBrowser() {
  console.log('Opening browser...');
  console.log('Checking the browser mode...');
  var headless_flag = process.env.headless_chrome === true;
  console.log(`Headless flag: ${headless_flag}`);
  await openBrowser({headless: headless_flag});
}

async function quit() {
  console.log('Closing browser...');
  await closeBrowser();
}

async function refreshPage() {
  console.log('Refreshing page...');
  await reload();
}

async function hasContent(content) {
  console.log(`Checking if page has the text: ${content}`);
  return await text(content).exists();
}

async function takeASnap() {
  console.log('Taking screenshot...');
  var fileName = `screenshot-${new Date().getTime()}.png`;
  await screenshot({path: `logs/screenshots/${fileName}`});
}

module.exports = {
  visitPage, launchBrowser, quit, refreshPage, hasContent, takeASnap
}
