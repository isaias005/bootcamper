import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home/Home'
import Signup from './components/Signup/Signup'
import Bootcamps from './components/Bootcamps/Bootcamps'
import AddBootcamp from './components/AddBootcamp/AddBootcamp'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <ProtectedRoute path="/bootcamps" component={Bootcamps} />
          <ProtectedRoute path="/add-bootcamp" component={AddBootcamp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
