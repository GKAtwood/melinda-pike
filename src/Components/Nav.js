import React from 'react';
import "semantic-ui-css/semantic.min.css";
import {Link} from 'react-router-dom';
import { Menu, Container, Button } from "semantic-ui-react";


function Nav() {
    return (
        
       
       
        <div className='nav'>
            
            <p>MELINDA PIKE</p>
            
            {/* <h2 className='home'>HOME</h2> */}
            <Link to='/' className="home"><h2>HOME</h2></Link>
            {/* <h2>ABOUT</h2> */}
            <Link to='/about' className="links"><h2>ABOUT</h2></Link>
            {/* <h2>PUBLISHED</h2> */}
            <Link to='/published' className="links"><h2>PUBLISHED</h2></Link>
            {/* <h2>DIGITAL MARKETING + PR</h2> */}
            <Link to='/digitalmarketing' className="links"><h2>DIGITAL MARKETING</h2></Link>
            {/* <h2>BRAND PHOTOGRAPHY</h2> */}
            <Link to='/brandphotography' className="links"><h2>BRAND PHOTOGRAPHY</h2></Link>
            {/* <h2>WEDDING PHOTOGRAPHY</h2> */}
            <Link to='/weddingphotography' className="links"><h2>WEDDING PHOTOGRAPHY</h2></Link>
          
           
        </div> 
 
     
    );
  }
  
  export default Nav;
  