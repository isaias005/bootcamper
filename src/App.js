import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Bootcamps from './components/Bootcamps/Bootcamps';
import SingleBootcamp from './components/Bootcamps/SingleBootcamp';
import AddBootcamp from './components/AddBootcamp/AddBootcamp';
import Navbar from './components/Navbar'
import NotFound from './components/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/bootcamps">
            <Navbar />
            <Bootcamps />
          </Route>
          <Route exact path="/bootcamps/:id">
            <Navbar />
            <SingleBootcamp />
          </Route>
          <Route exact path="/add-bootcamp">
            <Navbar />
            <AddBootcamp/>
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
