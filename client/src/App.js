import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import HeaderJs from './common/HeaderJs';
import Daily from './Daily';
import Gallery from './Gallery';
import AddImageForm from './AddImageForm';

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
          <Daily
            images={this.state.images}
            DeleteImage={this.DeleteImage}
          />
        </div>
      );
    }
    return <Gallery images={this.state.images} DeleteImage={this.DeleteImage} />;
  }
  changeView() {
    this.setState({ singleImage: !this.state.singleImage });
  }

  AddImage(image) {
    axios({
      method: 'POST',
      url: 'http://localhost:3001/images',
      data: {
        title: image.title,
        image: image.image,
        description: image.description
      }
    })
    .then(res => {
      this.setState({ images: [...this.state.images, res.data] });
    })
    .then(this.setState({ singleImage: false }));
  }

  DeleteImage(id) {
    axios.delete(`http://localhost:3001/images/${id}`)
      .then(res => {
        console.log('image deleted sir from App axios');
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className='App'>
        <div className='header-container'>
          <HeaderJs
            changeView={this.changeView.bind(this)}
            go={this.state.singleImage ? 'all' : '1'}
          />
          <div onClick={this.AddImage.bind(this)} style={{ cursor: 'pointer' }}>Add Image</div>
          <div onClick={this.DeleteImage.bind(this)} style={{ cursor: 'pointer' }}>Delete Image</div>
        </div>
        {this.showGallery()}
        <AddImageForm AddImage={this.AddImage.bind(this)} />
      </div>
    );
  }
}

export default App;
