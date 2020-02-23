import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Auth, { AuthContext } from './components/Auth'

ReactDOM.render(
    <AuthContext.Provider value={new Auth()}>
      <App />
    </AuthContext.Provider>,
  document.getElementById('root')
);