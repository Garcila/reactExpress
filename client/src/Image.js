import React from 'react';
import './App.css';

class Image extends React.Component {
  render() {
    const { description, image, title, created } = this.props.details;
    return (
      <div className='container'>
        <li className='images'>
          <div className='created'>{created}</div>
          <img className='image' src={image} alt='one face' />
          <h3 className='image-title'>{title.toUpperCase()}</h3>
          <div className='description'>{description}</div>

        </li>
      </div>
    );
  }
}

export default Image;
