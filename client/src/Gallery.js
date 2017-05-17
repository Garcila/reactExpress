import React from 'react';
import Image from './Image';

const Gallery = (props) => {
  const { images } = props;
  return (
    <div className='container'>
      <ul className='list-of-images'>
        {
          images.map((image, index) => {
            return (
              <Image
                key={index}
                details={image}
                DeleteImage={props.DeleteImage}
              />
            );
          })
        }
      </ul>
    </div>
  );
};

        export default Gallery;
