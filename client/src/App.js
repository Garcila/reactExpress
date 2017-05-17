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

  AddImage() {
    axios({
      method: 'POST',
      url: 'http://localhost:3001/images',
      data: {
        title: 'new',
        image: 'https://lh3.googleusercontent.com/sstwc56z31UMtuTFZvulHPnDl3sFutcJnmu7Tb5LCXMQwZBGmxgusEiOgKTo_LZ_lwDnHfsk8B3eplEy50opdIzNVHkUjc73ubGGBvNV52Lf7BaFBZ6eoGlahe9XptK-tC81dZ_S16NVaP9e7CbBk_qVpXTkoqZwzZ-81wqkUU6QGSeawArJNtgSasQj1GDp4tdsPjoftYUM1GFDdNYpvUJsIJJUDj1Hww4qAxi7D98dMKUQ3qAID6UAA6tVv6wGx38zHL916p1eaqC-oaj-Hxj5jr5FBA5puc9blhIWDuOPJrYKH5CMajyIoCPd3WB_FuZPBLrIahK8FaEaUgu3eTETAcfYu5ZmC8bVpkwwn_cLWDA1SrWWH3WLe5dVOjpbwJTojd1uLmt3ZXAbPRtALN8SBt6vwziEf2hhb8aCckltnTiq1bz-nppTBoZsa48P_oIbp6Qw0MA7T0bJokGPZiMhsbXc1zXH36YKnAMFFMSvy-8jjunXXYXdOVbvC9OvwJoR2zZM8tpjboae3DppVttWOyN_cNLaZFgoAn0gwdk-aVPhI3D4nfCo7zyUnIJwOt9O62sZZiVhi1oN3vVRroQcDQf2Rq7CIZCFQYAEgHjZr7GH1FE3XA=w606-h909-no',
        description: 'otroqold shoe'
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
      </div>
    );
  }
}

export default App;
