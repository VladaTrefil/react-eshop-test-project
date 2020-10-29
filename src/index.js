import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { UserProvider } from '~/context/user';
import { reducer, initialState } from '~/context/reducer';

import App from '~/App';

ReactDOM.render(
  <UserProvider reducer={reducer} initialState={initialState}>
    <Router>
      <App />
    </Router>
  </UserProvider>,
  document.getElementById('root')
);
