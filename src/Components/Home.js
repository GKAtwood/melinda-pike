import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav'



class Home extends Component {
    render() {
     
  
      return (
        
        <div className="App-home">
           <Nav/>
          <header className="App-header">
           
            <div className="App-title"><b><b></b></b></div>
            
            <div className="login-box">
             
              
              
            </div>
          </header>
          
          <section>
              <div className='main'>MAIN</div>
          </section>
  
          <footer className='footer'>
              <h4>Copyright © 2020 Melinda Pike</h4>
              
          </footer>
        </div>
      );
    }
  }   
  
  export default Home; 