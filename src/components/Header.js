// Header.js

import React from 'react';
import './Header.css'; // Import your CSS for styling
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="header">
      <div className="hero-section">
           <img className='hero-back-img' src="/hero-background.png" alt="Aayush Pandey" />
       <div className='left-part'>
        <div className='data-holder'>
        <p 
        className='sub_headings'>My Name is Aayush Pandey</p>
        <h1 className='headings'>FullStack Javascript Developer</h1>
        {/* <img

        src='https://www.askgalore.com/wp-content/uploads/2021/11/mern_hero.png'
        className='skill-img'
        /> */}

        </div>
        <div className='button-holder'>
            <Button
            className='btn-1'
            >
                DOWNLOAD CV
                <i class="fas fa-download"></i> 
            </Button>
            <Button
            className='btn-2'
            ><a style={{textDecoration:'none',color:'#078d84'}} href='https://www.linkedin.com/in/aayush-pandey-a8b65b203/'>
                LINKEDIN
                </a>
            </Button>
        </div>
       </div>
       <div className='right-part'>
       <img className='hero-img' src="/pp_profile.png" alt="Aayush Pandey" />
       </div>
      </div>
    </header>
  );
};

export default Header;
