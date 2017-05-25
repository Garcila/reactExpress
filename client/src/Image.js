import React from 'react';
import './App.css';

const Image = (props) => {
  const { description, image, title, created, _id } = props.details;

  const imageDelete = (e) => {
    e.preventDefault();
    props.DeleteImage(_id);
  };

  return (
    <div className='container'>
      <li className='images'>
        <div className='created'>{created}</div>
        <img className='image' src={image} alt='one face' />
        <h3 className='image-title'>{title ? title.toUpperCase() : 'no title'}</h3>
        <div className='description'>{description}</div>
        <button onClick={imageDelete}>Delete</button>
      </li>
    </div>
  );
};

export default Image;
