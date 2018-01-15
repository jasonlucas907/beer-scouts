import React, { Component } from 'react';
import PageWindow from './PageWindow/PageWindow.js';
import Header from './Header/Header.js';
import key from './key.js'
import './App.css';

class App extends Component {

  constructor() {
      super();
      this.state = {
        pagePosition: 'page-strip-container home-position',
        featured: null
      };
    }

  // componentDidMount = () => {
  //   this.getFeatured()
  // }



  pageChange = (page) => {
    this.setState({
      pagePosition: `page-strip-container ${page}-position`
    })
  }


  render() {
    return (
      <div className="App">

        < Header
          pageChange={this.pageChange}
        />
        < PageWindow
          pagePosition={this.state.pagePosition}
        />

      </div>
    );
  }
}

export default App;
