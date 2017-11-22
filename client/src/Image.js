import React from 'react';
import './App.css';

const Image = props => {
  const { metadata, _id, uploadDate } = props.details;
  console.log('props from image', props);

  const { isAuthenticated } = props.auth;

  const imageDelete = e => {
    e.preventDefault();
    props.DeleteImage(_id);
  };

  return (
    <li className="image-card">
      <div className="image-created">
        {uploadDate}
      </div>
      <img
        className="image-src"
        src={`https://obscure-beyond-35921.herokuapp.com/images/show/${_id}`}
        alt="one face"
      />
      <h3 className="image-title">
        {metadata.image_name ? metadata.image_name.toUpperCase() : 'no title'}
      </h3>
      <div className="image-description">
        {metadata.description}
      </div>
      {isAuthenticated() && <button onClick={imageDelete}>Delete</button>}
    </li>
  );
};

export default Image;
