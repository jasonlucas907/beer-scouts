import React from 'react';
import './MountainBackground.css';
import mountain1 from '../assets/mtn1.png';
import mountain2 from '../assets/mtn2.png';
import mountain3 from '../assets/mtn3.png';
import mountain4 from '../assets/mtn4.png';
import birds1 from '../assets/birds2.gif';

const MountainBackground = ({ }) => {


  return (
    <div className='mountain-background-container'>

      <img className='mountain1' src={ mountain1 } alt='outline image of mountain landscape'/>
      <img className='mountain2' src={ mountain2 } alt='outline image of mountain landscape'/>
      <img className='mountain3' src={ mountain3 } alt='outline image of mountain landscape'/>
      <img className='home-page-birds' src={ birds1 } alt='flock of birds'/>
      <img className='mountain4' src={ mountain4 } alt='outline image of mountain landscape'/>

    </div>
  )

}

MountainBackground.propTypes = {

}

export default MountainBackground;
