import React from 'react';
import cloud1 from '../assets/cloud1.png';
import cloud2 from '../assets/cloud2.png';
import './Clouds.css';


const Clouds = ({ }) => {


  return (
    <div className='clouds-container'>

      <img className='cloud1' src={cloud1} alt='cloud illustration'/>
      <img className='cloud2' src={cloud2} alt='cloud illustration'/>

    </div>
  )

}

Clouds.propTypes = {

}

export default Clouds;
