import React from 'react';
import PageStrip from '../PageStrip/PageStrip.js'
import './PageWindow.css';


const PageWindow = ({ pagePosition }) => {


  return (
    <div className='page-window-container'>

      < PageStrip
        pagePosition={ pagePosition }
      />

    </div>
  )

}

PageWindow.propTypes = {

}

export default PageWindow;
