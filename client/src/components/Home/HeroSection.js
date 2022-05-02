import { Link } from 'react-router-dom';
import React from 'react';
// import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1 className="paradise">PARADISE IN JABALPUR</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
      
      <Link to={{pathname: '/dashboard'}} style={{textDecoration: 'none'}} >
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
         GET STARTED <i className='far fa-play-circle' />
        </Button>
        </Link>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default HeroSection;