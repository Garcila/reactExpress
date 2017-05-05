import React from 'react';
import Image from './Image';

const Gallery = ({ images }) => {
  return (
    <div className='container'>
      <ul className='list-of-images'>
        {
          Object
          .keys(images)
          .map(key =>
            <Image
              key={key}
              details={images[key]}
            />)
        }
      </ul>
    </div>
    );
};

export default Gallery;
