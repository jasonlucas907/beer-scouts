import React from 'react';
import HomePage from '../HomePage/HomePage.js';
import Contact from '../Contact/Contact.js';
import Beer from '../Beer/Beer.js';
import Breweries from '../Breweries/Breweries.js';
import Featured from '../Featured/Featured.js';
import './PageStrip.css';


const PageStrip = ({ pagePosition, currentPage }) => {


  return (
    <div className={ pagePosition }>

      < Contact />
      < HomePage />
      < Beer />
      < Breweries />
      < Featured
        currentPage={ currentPage }
      />

    </div>
  )

}

PageStrip.propTypes = {

}

export default PageStrip;
