import React from 'react';
import cloud1 from '../assets/cloud1.png';
import cloud2 from '../assets/cloud2.png';
import cloud3 from '../assets/cloud3.png';
import cloud4 from '../assets/cloud4.png';
import './Clouds.css';


const Clouds = ({ }) => {


  return (
    <div className='clouds-container'>

      <img className='cloud1' src={cloud1} alt='cloud illustration'/>
      <img className='cloud2' src={cloud2} alt='cloud illustration'/>
      <img className='cloud3' src={cloud3} alt='cloud illustration'/>
      <img className='cloud4' src={cloud4} alt='cloud illustration'/>

    </div>
  )

}

Clouds.propTypes = {

}

export default Clouds;
