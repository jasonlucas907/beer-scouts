import React from 'react';
import './Header.css';


const Header = ({ pageChange }) => {


  return (
    <div className='header-container'>

      <p className='navigation' onClick={ () => pageChange('contact') }>CONTACT</p>
      <p className='navigation' onClick={ () => pageChange('featured') }>FEATURED</p>
      <p className='navigation' onClick={ () => pageChange('breweries') }>BREWERIES</p>
      <p className='navigation' onClick={ () => pageChange('beer') }>BEER</p>
      <p className='navigation' onClick={ () => pageChange('home') }>HOME</p>

    </div>
  )

}

Header.propTypes = {

}

export default Header;
