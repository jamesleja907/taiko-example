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
