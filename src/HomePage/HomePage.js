import React from 'react';
import MountainBackground from '../MountainBackground/MountainBackground.js';
import RidgeScout from '../RidgeScout/RidgeScout.js';
import LodgeMtn from '../LodgeMtn/LodgeMtn.js';
import Clouds from '../Clouds/Clouds.js';
import landingForeground from '../assets/landing-page-foreground.png';
import './HomePage.css';


const HomePage = ({ }) => {


  return (
    <div className='home-page-container'>

      < MountainBackground />
      < RidgeScout />
      < Clouds />
      < LodgeMtn />

      <img className='home-page-foreground' src={landingForeground} alt='rocky landscape'/>

    </div>
  )

}

HomePage.propTypes = {

}

export default HomePage;
