import React from 'react';
import './App.css';

const Image = (props) => {
  const { metadata, created, _id, filename } = props.details;
  const imageDelete = (e) => {
    e.preventDefault();
    props.DeleteImage(_id);
  };

  return (
      <li className='images'>
        <div className='created'>{created}</div>
        <img className='image' src={`http://localhost:3001/images/show/${_id}`} alt='one face' />
        <h3 className='image-title'>{filename ? filename.toUpperCase() : 'no title'}</h3>
        <div className='description'>{metadata.description}</div>
        <button onClick={imageDelete}>Delete</button>
      </li>
  );
};

export default Image;
