import React from 'react'
import Typography from '@mui/material/Box';
import './Footer.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from '@mui/material';

export default function Footer() {
  return (
    <div className='footerWraper'>
    <div className='footerRoot'>
      <div className='imageContainer'>
        <img className='footerImage'src="https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_960_720.png" alt=""/>
        <Typography className='siteName'>SMARTCITY</Typography>
      </div>

      <div className='contactContainer'>
         <ul>
           <li><Link className="linkk" to='/'>Home</Link></li>
           <li><Link className="linkk" to={{pathname: '/aboutus'}}>About Us</Link></li>
           <li><Link className="linkk" to={{pathname: '/contact'}}>Contact</Link></li>
         </ul>

         <div className='iconContainer'>
           <div className='icon'>
           <TwitterIcon/>
           </div>
           <div className='icon'>
           <FacebookIcon/>
           </div>
           <div className='icon'>
           <InstagramIcon/>
           </div>
           <div className='icon'>
             <LinkedInIcon/>
           </div>
         </div>
           
           <div className='newsletter-signUp'>
               <a href="https://infinite-peak-28063.herokuapp.com/">Sign Up for our Newsletter</a>
           </div>
         <div className='copyRightContainer'>
            <Typography className='copyright-text'>Copyright © 2022, All Right Reserved</Typography>
         </div>
      </div>
      </div>
      </div>
  )
}
