import React from 'react';
import Clouds from '../Clouds/Clouds.js';
import contactForeground from '../assets/contact-page-foreground.png';
import contactMtn from '../assets/contact-mtn.png';
import stars from '../assets/stars.png';
import './Contact.css';


const Contact = ({ }) => {


  return (
    <div className='contact-page-container'>

      <div className='night'>
        <img className='stars' src={ stars } alt='stary sky'/>
      </div>
      <img className='contact-mtn' src={contactMtn} alt='mountain landscape'/>
      < Clouds />
      <img className='contact-page-foreground' src={contactForeground} alt='rocky landscape'/>

    </div>
  )

}

Contact.propTypes = {

}

export default Contact;
