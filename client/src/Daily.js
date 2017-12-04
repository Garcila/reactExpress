import React from 'react';
import Image from './Image';

import './App.css';

const Daily = props => {
  const { images } = props;
  const randomNumber = Math.floor(Math.random() * images.length);
  return (
    <div className="container">
      <h2
        className="welcome-message"
        // style={{
        //   fontFamily: 'Raleway',
        //   fontSize: '0.6rem',
        //   padding: '1rem 2rem',
        //   justifyContent: 'spaceAround',
        //   color: 'grey'
        // }}
      >
        Welcome to faces. In this page is the image of the day, week or month...
        depending on time and creativity.
      </h2>
      {images.map((image, index) => {
        return index === randomNumber ? (
          <ul key={index} className="list-of-1-image">
            <div
              className="background-blur"
              style={{
                background: `url('https://obscure-beyond-35921.herokuapp.com/images/show/${props.id ||
                  image._id}')`,
                backgroundSize: 'cover',
                marginTop: '2.2rem',
                overflowX: 'hidden'
              }}
            />
            <Image
              key={index}
              details={image}
              DeleteImage={props.DeleteImage}
              auth={props.auth}
              id={props.id}
            />
          </ul>
        ) : (
          ''
        );
      })}
    </div>
  );
};
// }

export default Daily;
