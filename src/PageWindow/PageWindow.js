import React from 'react';
import PageStrip from '../PageStrip/PageStrip.js'
import './PageWindow.css';


const PageWindow = ({ pagePosition, currentPage }) => {


  return (
    <div className='page-window-container'>

      < PageStrip
        pagePosition={ pagePosition }
        currentPage={ currentPage }
      />

    </div>
  )

}

PageWindow.propTypes = {

}

export default PageWindow;
