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
              <button className='readbutton'><span>READ MORE</span></button>
              <button className="contactbutton"><span>CONTACT ME</span></button>
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
          <section className ="about">
          
              <h1 className='abouttitle'>ABOUT MELINDA</h1>
              <img src="https://images.unsplash.com/photo-1471018238625-87ca40f13b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="Melinda" className="melinda"   width="470"/>
              {/* <button className='aboutbutton'><span>READ MORE</span></button> */}
              <Link to='/about' className="links"><button className="aboutbutton"><span>READ MORE</span></button></Link>
              <div className='aboutcontent'>
             
            <p>My objective is to create a full funnel solution with expert Facebook & Instagram advertising services. We are a proficient Facebook Blueprint Certification partner offering top-notch services to small and big businesses alike with simple month-to-month contracts, à la carte service packages, and flexible budgets.
        <br></br><br></br>
“My job is to document memories of your most meaningful life events. My vision is to capture the little moments in between. Each image has the opportunity to tell a story and my mission is to present you with images that are timeless, which speak for themselves.” -Melinda
</p>

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