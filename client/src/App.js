import React, { Component } from 'react';
import './App.css';

import HeaderJs from './common/HeaderJs';
import Daily from './Daily';
import Gallery from './Gallery';

class App extends Component {
  state = {
      images: [],
      singleImage: true
  };

  componentDidMount() {
    fetch('/images')
      .then(res => res.json())
      .then(images => this.setState({ images }));
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
            title={'Faces...'}
            subtitle={'My family doesn\'t get'}
            go={this.state.singleImage ? 'all' : '1'}
          />
        </div>
        {this.showGallery()}
      </div>
    );
  }
}

export default App;
