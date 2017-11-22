import React from 'react';
import Image from './Image';

import './App.css';

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
      {images.map((image, index) => {
        console.log(image._id);
        return index === randomNumber ? (
          <ul key={index} className="list-of-1-image">
            <div 
            className="background-blur"
            style={{ background: `url('https://obscure-beyond-35921.herokuapp.com/images/show/${image._id}')`, backgroundSize: 'contain' }}
            >j</div>
            <Image
              key={index}
              details={image}
              DeleteImage={props.DeleteImage}
              auth={props.auth}
            />
          </ul>
        ) : (
          ''
        );
      })}
    </div>
  );
};

export default Daily;
