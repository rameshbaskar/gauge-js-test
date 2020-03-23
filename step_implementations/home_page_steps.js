const { write, click, goto, into, highlight, waitFor } = require('taiko');

// page objects
const txtSearchField = "$[name='q']";
const btnSearch = "Google Search";

step("Goto Home Page", async () => {
    await goto('http://www.google.co.in/');
});

step("Search for <textToSearch>", async (textToSearch) => {
    await write(textToSearch, into(txtSearchField));
    await waitFor(3000);
    await highlight(btnSearch);
    await click(btnSearch);
});
