import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const { openBrowser, goto, closeBrowser, text } = require('taiko');
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('loads the initial library correctly', async () => {
    await openBrowser();
    await goto("localhost:3000");
    await text('The library is open').exists();
    await closeBrowser();
});

// it('demonstrates request/response', async () => {
//   await openBrowser();
//   await goto("localhost:3000");
//   await text('The library is open').exists();
//   await closeBrowser();
// });

// it('demonstrates different selectors', async () => {
//   await openBrowser();
//   await goto("localhost:3000");
//   await text('The library is open').exists();
//   await closeBrowser();
// })


// it('clicking the start/stop reading button will correctly update the book (demonstrate proximity selectors', async () => {
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
