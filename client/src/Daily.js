import React from 'react';
import Image from './Image';

  const Daily = (props) => {
    const { images } = props;
    const randomNumber = Math.floor(Math.random() * (images.length)) + 1;
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
};

export default Daily;
