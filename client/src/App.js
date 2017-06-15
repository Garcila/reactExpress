/* eslint-env browser */

import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import HeaderJs from './common/HeaderJs';
import Daily from './Daily';
import Gallery from './Gallery';
import AddImageForm from './AddImageForm';

class App extends Component {
  constructor() {
    super();

    this.DeleteImage = this.DeleteImage.bind(this);

    this.state = {
      images: [],
      singleImage: false,
      loggedIn: false,
    };
  }

  componentDidMount() {
    this.updateImages();
  }

  updateImages() {
    axios.get('http://localhost:3001/images/')
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
    let images = image.file_source.files;
    for (let i = 0; i < images.length; i++) {
      let data = new FormData();
      data.append('title', image.file_source.files[i].name);
      data.append('file', image.file_source.files[i]);
      axios.post('http://localhost:3001/images', data)
        .then(res => {
          this.updateImages();
          console.log('success', res);
        })
        .catch(err => console.log('failure', err));
    }
  }

  DeleteImage(id) {
    axios.delete(`http://localhost:3001/images/${id}`)
      .then(res => {
        this.updateImages();
        console.log('delete request sent from App axios', id);
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
        </div>
        {this.showGallery()}
        <AddImageForm AddImage={this.AddImage.bind(this)} />
      </div>
    );
  }
}

export default App;
