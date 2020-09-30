import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import DigitalMarketing from './Components/DigitalMarketing';
import About from './Components/About';


export default (
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Dashboard} exact path='/dashboard'/>
      <Route component={DigitalMarketing} exact path ='/digitalmarketing'/>
      <Route component={About} exact path ='/about'/>
      {/* <Route component={About} path="/about" />
      <Route component={Contact} path ="/contact" />
      <Route component={Gallery} path="/gallery" /> */}
    </Switch>
  );