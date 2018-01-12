import React, { Component } from 'react';
import PageWindow from './PageWindow/PageWindow.js';
import Header from './Header/Header.js';
import './App.css';

class App extends Component {

  constructor() {
      super();
      this.state = {
        pagePosition: 'page-strip-container home-position'
      };
    }

  pageChange = (page) => {
    this.setState({
      pagePosition: page
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
