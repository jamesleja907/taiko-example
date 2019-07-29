import React from 'react';

const { openBrowser, goto, closeBrowser, text, click } = require('taiko');

fit('is not dependent on the html structure', async () => {
  await openBrowser();
  await goto("localhost:3000");
  expect(await text('The Count of Monte Cristo by: Alexandre Dumas').exists()).toBe(true);
  await closeBrowser();
}, 15000);

it('clicking the start/stop reading button will correctly update the book (demonstrate proximity selectors)', async () => {
  const { button, toRightOf, image } = require('taiko');
  await openBrowser();
  await goto("localhost:3000");
  expect(await text("I am not currently reading the book", toRightOf(image("EastOfEdenCover"))).exists()).toBe(true);

  await click(button("Start Reading", toRightOf(image("EastOfEdenCover"))));
  expect(await text("I am currently reading the book", toRightOf(image("EastOfEdenCover"))).exists()).toBe(true);
  await closeBrowser();
}, 15000);


it('clicking the favourite checkbox will correctly update isFavourite (demonstrate near)', async () => {
  const { checkBox, near } = require('taiko');
  await openBrowser();
  await goto("localhost:3000");
  expect(await text("This is not one of my favourite books", near(text("The Sun Also Rises by: Ernest Hemingway"))).exists()).toBe(true);

  await checkBox({id: "checkboxId"}, near(text("The Sun Also Rises by: Ernest Hemingway"))).check();
  expect(await text("This is one of my favourite books", near(text("The Sun Also Rises by: Ernest Hemingway"))).exists()).toBe(true);
  await closeBrowser();
}, 15000);

it('clicking the change button will change between closed/open library (demonstrate highlight)', async () => {
  const { highlight, screenshot } = require('taiko');
  await openBrowser();
  await goto("localhost:3000");
  expect(await text('The library is open').exists()).toBe(true);

  await highlight('The library is open');
  await screenshot({path: 'beforeScreenshot.png'});
  await click('Change');
  await highlight('Change');

  expect(await text('The library is closed').exists()).toBe(true);
  await highlight('The library is closed');
  await screenshot({path: 'afterScreenShot.png'});
  await closeBrowser();
}, 15000);

it('should display the product of the week correctly (demonstrates request/response)', async () => {
  const {intercept, screenshot} = require('taiko');
  const mockData = [{'id': '1', 'name': 'Lagavulin 16', 'image': 'https://cdn2.masterofmalt.com/whiskies/p-2813/lagavulin/lagavulin-16-year-old-whisky.jpg?ss=2.0'}];

  await openBrowser({args: ["--disable-web-security"]});

  await intercept("https://hplussport.com/api/products/order/price/sort/asc/qty/1", {"body": mockData});
  await goto("localhost:3000", {waitForEvents:['firstMeaningfulPaint']});
  await screenshot({path: 'debug.png'});
  expect(await text('Lagavulin 16').exists()).toBe(true);
  await closeBrowser();
}, 15000);
