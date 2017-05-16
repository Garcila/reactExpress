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
    axios('http://localhost:3001/images/')
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

  AddImage() {
    axios({
      method: 'POST',
      url: 'http://localhost:3001/images',
      data: {
        title: 'new',
        image: 'https://goo.gl/1vgMjx',
        description: 'otroqold shoe'
      }
    })
    .then(res => {
      this.setState({ images: [...this.state.images, res.data] });
    })
    .then(this.setState({ singleImage: false }));
  }

  // DeleteImage() {
  //   axios.delete('http://localhost:3001/images')
  // }

  render() {
    return (
      <div className='App'>
        <div className='header-container'>
          <HeaderJs
            changeView={this.changeView.bind(this)}
            go={this.state.singleImage ? 'all' : '1'}
          />
          <div onClick={this.AddImage.bind(this)} style={{ cursor: 'pointer' }}>Add Image</div>
        </div>
        {this.showGallery()}
      </div>
    );
  }
}

export default App;
