const { write, goto, into } = require('taiko');

// page objects
const txtSearchField = "$[name='q']";

step("Goto Home Page", async () => {
    await goto('http://www.google.com/');
});

step("Search for <textToSearch>", async (textToSearch) => {
    await write(textToSearch, into(txtSearchField));
    await press("Enter");
});
