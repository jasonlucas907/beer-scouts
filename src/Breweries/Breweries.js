import React from 'react';
import Clouds from '../Clouds/Clouds.js';
import beerLockerForeground from '../assets/beer-locker-foreground.png';
import beerLockerMtn from '../assets/beer-locker-mtn.png';
import stars from '../assets/stars.png';
import './Breweries.css';


const Breweries = ({ }) => {


  return (
    <div className='breweries-page-container'>

      <div className='night'>
        <img className='stars' src={ stars } alt='stary sky'/>
      </div>
      <img className='breweries-mtn' src={beerLockerMtn} alt='mountain landscape'/>
      < Clouds />
      <img className='breweries-page-foreground' src={beerLockerForeground} alt='rocky landscape'/>

    </div>
  )

}

Breweries.propTypes = {

}

export default Breweries;
