import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'


export default (
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Dashboard} exact path='/dashboard'/>
      {/* <Route component={About} path="/about" />
      <Route component={Contact} path ="/contact" />
      <Route component={Gallery} path="/gallery" /> */}
    </Switch>
  );