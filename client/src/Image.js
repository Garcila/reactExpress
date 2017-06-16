import React from 'react';
import './App.css';

const Image = (props) => {
  const { metadata, _id, uploadDate } = props.details;
  const imageDelete = (e) => {
    e.preventDefault();
    props.DeleteImage(_id);
  };

  return (
      <li className='images'>
        <div className='created'>{uploadDate}</div>
        <img className='image' src={`http://localhost:3001/images/show/${_id}`} alt='one face' />
        <h3 className='image-title'>{metadata.image_name ? metadata.image_name.toUpperCase() : 'no title'}</h3>
        <div className='description'>{metadata.description}</div>
        <button onClick={imageDelete}>Delete</button>
      </li>
  );
};

export default Image;
