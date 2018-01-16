import React from 'react';
import './FeaturedDisplay.css';
import billBoardBase from '../assets/billboardbase.png';


const FeaturedDisplay = ({ }) => {


  return (
    <div className='featured-display-page-container'>

      <div className='billboard-container'>
        <div className='billboard'></div>
        <img className='billboard-base' src={ billBoardBase } alt='billboard base'/>
      </div>


    </div>
  )

}

FeaturedDisplay.propTypes = {

}

export default FeaturedDisplay;
