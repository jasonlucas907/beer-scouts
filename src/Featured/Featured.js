import React from 'react';
import Clouds from '../Clouds/Clouds.js';
import featureForeground from '../assets/featured-foreground.png';
import contactMtn from '../assets/contact-mtn.png';
import stars from '../assets/stars.png';
import './Featured.css';


const Featured = ({ }) => {


  return (
    <div className='featured-page-container'>

      <div className='night'>
        <img className='stars' src={ stars } alt='stary sky'/>
      </div>
      <img className='featured-mtn' src={contactMtn} alt='mountain landscape'/>
      < Clouds />
      <img className='featured-page-foreground' src={featureForeground} alt='rocky landscape'/>

    </div>
  )

}

Featured.propTypes = {

}

export default Featured;
