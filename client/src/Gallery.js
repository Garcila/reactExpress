import React, { Component } from 'react';
import Image from './Image';

class Gallery extends Component {
  render() {
    const { users } = this.props;
    return (
        <div className='container'>
          <ul className='list-of-users'>
            {
              Object
              .keys(users)
              .map(key =>
                <Image
                  key={key}
                  details={users[key]}
                />)
            }
          </ul>
        </div>
        );
  }
}

export default Gallery;
