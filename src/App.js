import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Header from './Components/Header'
import "semantic-ui-css/semantic.min.css";
import routes from './routes';


function App() {
  return (
    <HashRouter>
   <div>
    {routes}
   </div>
   </HashRouter>

  );
}

export default App;
