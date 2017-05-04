import React, { Component } from 'react';
import './App.css';

import HeaderJs from './common/HeaderJs';
import Daily from './Daily';
import Gallery from './Gallery';

class App extends Component {
  state = {
      users: [],
      singleImage: true,
      allOrOne: 'all'
  };

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  showGallery() {
    if (this.state.singleImage) {
      return (
        <div>
          <Daily users={this.state.users} />
        </div>
      );
    }
    return <Gallery users={this.state.users} />;
  }
  changeView() {
    this.setState({ singleImage: !this.state.singleImage });
    if (this.state.allOrOne === 'all') {
      return this.setState({ allOrOne: '1' });
    }
    return this.setState({ allOrOne: 'all' });
  }

  render() {
    return (
      <div className='App'>
        <div className='header-container'>
          <HeaderJs
            changeView={this.changeView.bind(this)}
            title={'Faces...'}
            subtitle={'My family doesn\'t get'}
            go={this.state.allOrOne}
          />
        </div>
        {this.showGallery()}
      </div>
    );
  }
}

export default App;
