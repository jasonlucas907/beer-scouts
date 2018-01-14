import React from 'react';
import HomePage from '../HomePage/HomePage.js';
import Contact from '../Contact/Contact.js';
import BeerSearch from '../BeerSearch/BeerSearch.js';
import BeerLocker from '../BeerLocker/BeerLocker.js';
import './PageStrip.css';


const PageStrip = ({ pagePosition }) => {


  return (
    <div className={ pagePosition }>

      < Contact />
      < HomePage />
      < BeerSearch />
      < BeerLocker />

    </div>
  )

}

PageStrip.propTypes = {

}

export default PageStrip;
