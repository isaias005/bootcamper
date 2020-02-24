import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Auth, { AuthContext } from './components/Auth';
import Bootcamp, { BootcampContext } from './components/Bootcamp';

ReactDOM.render(
  <AuthContext.Provider value={new Auth()}>
    <BootcampContext.Provider value={new Bootcamp()}>
      <App />
    </BootcampContext.Provider>
  </AuthContext.Provider>,
  document.getElementById('root')
);