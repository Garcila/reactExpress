import React, { Component } from 'react';
import Image from './Image';

class Daily extends Component {
  render() {
    const { users } = this.props;
    const randomNumber = Math.floor(Math.random() * (6 - 1)) + 1;
    return (
        <div className='container'>
          <ul className='list-of-images'>
            <div className="App">
              {
                Object
                .keys(users)
                .map(key => {
                  return (key === `${randomNumber}`) ?
                    <Image
                      key={key}
                      details={users[key]}
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
