const taiko = require('taiko');

class Browser {
  constructor() {}

  static async open() {
    let flag = process.env.HEADLESS || true;
    await taiko.openBrowser({headless: flag});
  }
  
  static async visit(url) {
    await taiko.goto(url);
  }
  
  static async close() {
    await taiko.closeBrowser();
  }
  
  static async refresh() {
    await taiko.reload();
  }
  
  static async pressKey(key) {
    await taiko.press(key);
  }
  
  static async writeInto(locator, text) {
    await taiko.write(text, taiko.into(locator));
  }
  
  static async clickOn(locator) {
    await taiko.click(locator);
  }
  
  static async selectFromDropdown(locator, value) {
    await taiko.dropDown(locator).select(value);
  }
  
  static async check(locator) {
    await taiko.checkBox(locator).check();
  }
  
  static async unCheck(locator) {
    await taiko.checkBox(locator).uncheck();
  }
  
  static async chooseOption(locator) {
    await taiko.radioButton(locator).select();
  }
  
  static async getText(locator) {
    return await taiko.$(locator).text;
  }
  
  static async hasContent(text) {
    return await taiko.text(text).exists();
  }
  
  static async attachFile(locator, filePath) {
    await taiko.attach(filePath, taiko.to(locator));
  }
}

module.exports = Browser;
