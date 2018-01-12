import React from 'react';
import './Header.css';


const Header = ({ pageChange }) => {


  return (
    <div className='header-container'>

      <p className='navigation' onClick={ () => pageChange('page-strip-container contact-position') }>CONTACT</p>
      <p className='navigation' onClick={ () => pageChange('page-strip-container beer-locker-position') }>BEER LOCKER</p>
      <p className='navigation' onClick={ () => pageChange('page-strip-container beer-search-position') }>SEARCH BEER</p>
      <p className='navigation' onClick={ () => pageChange('page-strip-container home-position') }>HOME</p>

    </div>
  )

}

Header.propTypes = {

}

export default Header;
