import React from 'react';
import Image from './Image';

const Gallery = ({ images }) => {
  return (
    <div className='container'>
      <ul className='list-of-images'>
        {
          images.map((image, index) => {
            return (
              <Image
                key={index}
                details={image}
              />
            );
          })
        }
      </ul>
    </div>
  );
};

        export default Gallery;
