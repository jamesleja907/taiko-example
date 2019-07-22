import React from 'react';

const { openBrowser, goto, closeBrowser, text, click, button, toRightOf, image, near, checkBox } = require('taiko');


it('clicking the change button will change between closed/open library (demonstrate in REPL)', async () => {
  await openBrowser();
  await goto("localhost:3000");
  await text('The library is open').exists();
  await click('Change');
  await text('The library is closed').exists();
  await closeBrowser();
}, 15000);

it('clicking the start/stop reading button will correctly update the book (demonstrate proximity selectors)', async () => {
  await openBrowser();
  await goto("localhost:3000");
  await click(button("Start Reading", toRightOf(image("EastOfEdenCover"))));
  await text("I am currently reading this book", toRightOf(image("EastOfEdenCover"))).exists();
  await closeBrowser();
}, 15000);


it('clicking the favourite checkbox will correctly update isFavourite (demonstrate near)', async () => {
  await openBrowser();
  await goto("localhost:3000");
  await text("This is not one of my favourite books", near(text("The Sun Also Rises"))).exists();
  await checkBox({id: "checkboxId"}, near(text("The Sun Also Rises by:"))).check();
  await text("This is one of my favourite books", near(text("The Sun Also Rises"))).exists();
  await closeBrowser();
}, 15000);

it('is not dependent on the html structure', async () => {
  await openBrowser();
  await goto("localhost:3000");
  await text('The Count of Monte Cristo by: Alexandre Dumas').exists();
  await closeBrowser();
}, 15000);

// it('demonstrates request/response', async () => {
//   await openBrowser();
//   await goto("localhost:3000");
//   await text('The library is open').exists();
//   await closeBrowser();
// });


// it('shows highlight and screenshot', async () => {
//   await openBrowser();
//   await goto("localhost:3000");
//   await text('The library is open').exists();
//   await closeBrowser();
// });
