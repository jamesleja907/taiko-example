import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const { openBrowser, goto, closeBrowser } = require('taiko');
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('opens the Browser correctly', async () => {
    await openBrowser();
    await goto("localhost:3000");
    await closeBrowser();
});
