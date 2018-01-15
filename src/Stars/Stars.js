import React from 'react';
import './Stars.css';
import stars from '../assets/stars.png';

const Stars = ({ }) => {


  return (
      <div className='night'>

        <img className='stars' src={ stars } alt='stary sky'/>

      </div>
  )

}

Stars.propTypes = {

}

export default Stars;
