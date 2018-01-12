import React from 'react';
import lodgeMtn from '../assets/lodge-mtn.png';
import beerLight from '../assets/beer-signal-light.png';
import './LodgeMtn.css';


const LodgeMtn = ({ }) => {


  return (
    <div className='lodge-mtn-container'>

      <img className='lodge-mtn' src={lodgeMtn} alt='mountain with lodge on top'/>
      <div className='beer-light-container'>
        <img className='beer-light' src={beerLight} alt='Spotlight'/>
      </div>

    </div>
  )

}

LodgeMtn.propTypes = {

}

export default LodgeMtn;
