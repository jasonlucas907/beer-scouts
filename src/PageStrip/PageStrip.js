import React from 'react';
import HomePage from '../HomePage/HomePage.js';
import Contact from '../Contact/Contact.js';
import Beer from '../Beer/Beer.js';
import Breweries from '../Breweries/Breweries.js';
import Featured from '../Featured/Featured.js';
import './PageStrip.css';


const PageStrip = ({ pagePosition }) => {


  return (
    <div className={ pagePosition }>

      < Contact />
      < HomePage />
      < Beer />
      < Breweries />
      < Featured />

    </div>
  )

}

PageStrip.propTypes = {

}

export default PageStrip;
