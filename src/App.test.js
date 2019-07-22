import React from 'react';

const { openBrowser, goto, closeBrowser, text, click } = require('taiko');

it('is not dependent on the html structure', async () => {
  await openBrowser();
  await goto("localhost:3000");
  await text('The Count of Monte Cristo by: Alexandre Dumas').exists();
  await closeBrowser();
}, 15000);

it('clicking the start/stop reading button will correctly update the book (demonstrate proximity selectors)', async () => {
  const { button, toRightOf, image } = require('taiko');
  await openBrowser();
  await goto("localhost:3000");
  await click(button("Start Reading", toRightOf(image("EastOfEdenCover"))));
  await text("I am currently reading this book", toRightOf(image("EastOfEdenCover"))).exists();
  await closeBrowser();
}, 15000);


it('clicking the favourite checkbox will correctly update isFavourite (demonstrate near)', async () => {
  const { checkBox, near } = require('taiko');
  await openBrowser();
  await goto("localhost:3000");
  await text("This is not one of my favourite books", near(text("The Sun Also Rises"))).exists();
  await checkBox({id: "checkboxId"}, near(text("The Sun Also Rises by:"))).check();
  await text("This is one of my favourite books", near(text("The Sun Also Rises"))).exists();
  await closeBrowser();
}, 15000);

fit('clicking the change button will change between closed/open library (demonstrate highlight)', async () => {
  const { highlight, screenshot } = require('taiko');
  await openBrowser();
  await goto("localhost:3000");
  await text('The library is open').exists();
  await highlight('The library is open');
  await screenshot({path: 'beforeScreenshot.png'});
  await click('Change');
  await highlight('Change');
  await text('The library is closed').exists();
  await highlight('The library is closed');
  await screenshot({path: 'afterScreenShot.png'});
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
