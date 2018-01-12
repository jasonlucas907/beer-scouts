import React from 'react';
import Clouds from '../Clouds/Clouds.js';
import beerLockerForeground from '../assets/beer-locker-foreground.png';
import beerLockerMtn from '../assets/beer-locker-mtn.png';
import './BeerLocker.css';


const BeerLocker = ({ }) => {


  return (
    <div className='beer-locker-page-container'>

      < Clouds />
      <img className='beer-locker-mtn' src={beerLockerMtn} alt='mountain landscape'/>
      <img className='beer-locker-page-foreground' src={beerLockerForeground} alt='rocky landscape'/>

    </div>
  )

}

BeerLocker.propTypes = {

}

export default BeerLocker;
