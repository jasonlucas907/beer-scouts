import React from 'react';
import Clouds from '../Clouds/Clouds.js';
import beerSearchForeground from '../assets/beer-search-foreground.png';
import beerSearchMtn from '../assets/contact-mtn.png';
import './BeerSearch.css';


const BeerSearch = ({ }) => {


  return (
    <div className='beer-search-page-container'>

      < Clouds />
      <img className='beer-search-mtn' src={beerSearchMtn} alt='mountain landscape'/>
      <img className='beer-search-page-foreground' src={beerSearchForeground} alt='rocky landscape'/>

    </div>
  )

}

BeerSearch.propTypes = {

}

export default BeerSearch;
