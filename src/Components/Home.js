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
          
          <section className='main'>
              <div className='maincontent'>Hey Awesome Human!</div>
              <button className='readbutton'>READ MORE</button>
              <button className="contactbutton">CONATCT ME</button>
          </section>

          <section className='sectiontwo'>
            <div className='sectiontitle'>HOW CAN I HELP YOU
            <img src="https://res.cloudinary.com/dfgz2wntk/image/upload/v1599954300/heart-brown_rameog.png" alt="Hello" className="brownheart"  width="80"/>
            
            <img src="https://res.cloudinary.com/dfgz2wntk/image/upload/v1599954300/heart-brown_rameog.png" alt="Hello" className="brownheart"  width="80"/>
            
            <div>
            <img src="https://res.cloudinary.com/dfgz2wntk/image/upload/v1599955770/heart-tan_pgqfye.png" alt="Hello" className="peachheart"  width="70"/>
            
            <img src="https://res.cloudinary.com/dfgz2wntk/image/upload/v1599955770/heart-tan_pgqfye.png" alt="Hello" className="peachheart"  width="70"/>
            <img src="https://res.cloudinary.com/dfgz2wntk/image/upload/v1599954572/heart-peach_jhpeat.png" alt="Hello" className="tanheart"  width="75"/>
            
            <img src="https://res.cloudinary.com/dfgz2wntk/image/upload/v1599954572/heart-peach_jhpeat.png" alt="Hello" className="tanheart"  width="75"/>
            </div>
            </div>
          </section>
  
          <footer className='footer'>
              <h4>Copyright © 2020 Melinda Pike</h4>
              
          </footer>
        </div>
      );
    }
  }   
  
  export default Home; 