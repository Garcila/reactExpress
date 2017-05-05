import React, { Component } from 'react';
import Image from './Image';

class Daily extends Component {
  render() {
    const { images } = this.props;
    const randomNumber = Math.floor(Math.random() * (25 - 1)) + 1;
    return (
        <div className='container'>
          <ul className='list-of-images'>
            <div className="App">
              {
                Object
                .keys(images)
                .map(key => {
                  return (key === `${randomNumber}`) ?
                    <Image
                      key={key}
                      details={images[key]}
                    /> :
                  '';
                })
              }
            </div>
            </ul>
          </div>
        );
  }
}

export default Daily;
