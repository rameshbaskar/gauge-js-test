const taiko = require('taiko');

async function launch() {
  console.log('Opening browser...');
  console.log('Checking the browser mode...');
  let headless_flag = process.env.headless_chrome === true;
  console.log(`Headless flag: ${headless_flag}`);
  await taiko.openBrowser({headless: headless_flag});
}

async function visit(url) {
  console.log(`Navigating to URL: ${url}`);
  await taiko.goto(url);
}

async function quit() {
  console.log('Closing browser...');
  await taiko.closeBrowser();
}

async function takeASnap() {
  console.log('Taking screenshot...');
  let fileName = `screenshot-${new Date().getTime()}.png`;
  await taiko.screenshot({path: `logs/screenshots/${fileName}`});
}

async function refresh() {
  console.log('Refreshing page...');
  await taiko.reload();
}

async function hasContent(content) {
  console.log(`Checking if page has the text: ${content}`);
  return await taiko.text(content).exists();
}

async function writeInto(element, text) {
  console.log(`Writing text: ${text} into element: ${element}...`);
  await taiko.write(text, taiko.into(element));
}

async function clickOn(element) {
  console.log(`Clicking on element: ${element}...`);
  await taiko.click(element);
}

async function press(key) {
  console.log(`Pressing key: ${key}...`);
  await taiko.press(key);
}

module.exports = {
  launch, visit, quit, takeASnap, refresh, hasContent, writeInto, clickOn, press
}
