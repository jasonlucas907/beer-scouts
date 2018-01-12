import React from 'react';
import ridgeScout from '../assets/boyscouter-no-flag.png';
import './RidgeScout.css';


const RidgeScout = ({ }) => {


  return (
    <div className='ridge-scout-container'>

      <div className='flag-box'>
        <div className='flag'>BEER</div>
      </div>

      <img className='ridge-scout' src={ridgeScout} alt='boyscout standing on ridge'/>

    </div>
  )

}

RidgeScout.propTypes = {

}

export default RidgeScout;
