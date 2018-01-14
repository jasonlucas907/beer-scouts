import React from 'react';
import './Header.css';


const Header = ({ pageChange }) => {


  return (
    <div className='header-container'>

      <p className='navigation' onClick={ () => pageChange('contact') }>CONTACT</p>
      <p className='navigation' onClick={ () => pageChange('beer-locker') }>BEER LOCKER</p>
      <p className='navigation' onClick={ () => pageChange('beer-search') }>SEARCH BEER</p>
      <p className='navigation' onClick={ () => pageChange('home') }>HOME</p>

    </div>
  )

}

Header.propTypes = {

}

export default Header;
