import React from 'react';
import Image from './Image';

const Daily = props => {
  const { images } = props;
  const randomNumber = Math.floor(Math.random() * images.length);
  return (
    <div className="container">
      <h2
        style={{
          fontFamily: 'Raleway',
          fontSize: '0.9rem',
          padding: '1rem 2rem',
          justifyContent: 'spaceAround',
          color: 'grey'
        }}
      >
        In this page is the image of the day, week or month... depending on time
        and creativity.
      </h2>
      <ul className="list-of-1-image">
        <div className="App">
          {images.map((image, index) => {
            return index === randomNumber ? (
              <Image
                key={index}
                details={image}
                DeleteImage={props.DeleteImage}
                auth={props.auth}
              />
            ) : (
              ''
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default Daily;
