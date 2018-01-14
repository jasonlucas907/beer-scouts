import React from 'react';
import Clouds from '../Clouds/Clouds.js';
import beerLockerForeground from '../assets/beer-locker-foreground.png';
import beerLockerMtn from '../assets/beer-locker-mtn.png';
import stars from '../assets/stars2.png';
import './BeerLocker.css';


const BeerLocker = ({ }) => {


  return (
    <div className='beer-locker-page-container'>

      <div className='night'>
        <img className='stars' src={ stars } alt='stary sky'/>
      </div>
      < Clouds />
      <img className='beer-locker-mtn' src={beerLockerMtn} alt='mountain landscape'/>
      <img className='beer-locker-page-foreground' src={beerLockerForeground} alt='rocky landscape'/>

    </div>
  )

}

BeerLocker.propTypes = {

}

export default BeerLocker;
