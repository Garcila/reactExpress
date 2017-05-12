import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import HeaderJs from './common/HeaderJs';
import Daily from './Daily';
import Gallery from './Gallery';

class App extends Component {
  state = {
      images: [],
      singleImage: true,
      loggedIn: false
  };

  componentDidMount() {
    axios('http://localhost:3001/images')
      .then(images => this.setState({ images: images.data }));
  }

  showGallery() {
    if (this.state.singleImage) {
      return (
        <div>
          <Daily images={this.state.images} />
        </div>
      );
    }
    return <Gallery images={this.state.images} />;
  }
  changeView() {
    this.setState({ singleImage: !this.state.singleImage });
  }

  render() {
    return (
      <div className='App'>
        <div className='header-container'>
          <HeaderJs
            changeView={this.changeView.bind(this)}
            go={this.state.singleImage ? 'all' : '1'}
          />
        </div>
        {this.showGallery()}
      </div>
    );
  }
}

export default App;
