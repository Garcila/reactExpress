import React from 'react';
import Image from './Image';

const Daily = (props) => {
    const { images } = props;
    const randomNumber = Math.floor(Math.random() * (images.length));
    return (
      <div className='container'>
        <ul className='list-of-1-image'>
          <div className="App">
            {
              images.map((image, index) => {
                return (index === randomNumber) ?
                  <Image
                    key={index}
                    details={image}
                    DeleteImage={props.DeleteImage}
                  />
                  : '';
              })
            }
          </div>
        </ul>
      </div>
    );
};

export default Daily;
