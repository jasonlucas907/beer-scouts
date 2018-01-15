import React from 'react';
import Clouds from '../Clouds/Clouds.js';
import beerSearchForeground from '../assets/beer-search-foreground.png';
import beerSearchMtn from '../assets/contact-mtn.png';
import stars from '../assets/stars.png';
import './BeerSearch.css';


const BeerSearch = ({ }) => {


  return (
    <div className='beer-search-page-container'>

      <div className='night'>
        <img className='stars' src={ stars } alt='stary sky'/>
      </div>
      <img className='beer-search-mtn' src={beerSearchMtn} alt='mountain landscape'/>
      < Clouds />
      <img className='beer-search-page-foreground' src={beerSearchForeground} alt='rocky landscape'/>

    </div>
  )

}

BeerSearch.propTypes = {

}

export default BeerSearch;
