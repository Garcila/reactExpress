import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Header from './common/Header';
import Nav from '../src/common/Nav';
import Daily from './Daily';
import Gallery from './Gallery';
// import AddImageForm from './AddImageForm';

class App extends Component {
  constructor() {
    super();

    this.DeleteImage = this.DeleteImage.bind(this);

    this.state = {
      images: [],
      singleImage: true,
      loggedIn: false
    };
  }

  componentDidMount() {
    this.updateImages();
  }

  updateImages() {
    axios
      // .get('http://localhost:3001/images/')
      .get('https://obscure-beyond-35921.herokuapp.com/images/')
      .then(images => this.setState({ images: images.data }));
  }

  showGallery() {
    if (this.state.singleImage) {
      return (
          <Daily
            images={this.state.images}
            DeleteImage={this.DeleteImage}
            auth={this.props.auth}
          />
      );
    }

    return (
      <Gallery
        images={this.state.images}
        DeleteImage={this.DeleteImage}
        auth={this.props.auth}
      />
    );
  }

  changeView() {
    this.setState({ singleImage: !this.state.singleImage });
  }

  AddImage(image) {
    let images = image.file_source.files;
    for (let i = 0; i < images.length; i++) {
      let data = new FormData();
      data.append('fileName', image.file_source.files[i].name);
      data.append('file', image.file_source.files[i]);
      data.append(
        'title',
        image.title || image.file_source.files[i].name.split('.', 1)[0]
      );
      data.append('description', image.description);
      axios
        // .post('http://localhost:3001/images', data)
        .post('https://obscure-beyond-35921.herokuapp.com/images/', data)
        .then(res => {
          this.updateImages();
          console.log('success', res);
        })
        .catch(err => console.log('failure', err));
    }
  }

  DeleteImage(id) {
    axios
      // .delete(`http://localhost:3001/images/${id}`)
      .delete(`https://obscure-beyond-35921.herokuapp.com/images/${id}`)
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
      <div className="App">
        <Header
          titleMain={'1000 faces...'}
          subtitle={"My family doesn't like"}
        />
        <Nav
          changeView={this.changeView.bind(this)}
          go={this.state.singleImage ? 'See All Faces' : 'Single Face'}
          auth={this.props.auth}
          history={this.props.history}
        />
        {this.showGallery()}
        {/* <AddImageForm AddImage={this.AddImage.bind(this)} /> */}
      </div>
    );
  }
}

export default App;
