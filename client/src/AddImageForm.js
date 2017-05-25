import React, { Component } from 'react';

class AddImageForm extends Component {

  createImage = (e) => {
    e.preventDefault(e);
    const image = {
      file_source: e.target
    };

    this.props.AddImage(image);
    this.imageForm.reset();
  }

  render() {
    return (
      <form action='' ref={i => this.imageForm = i} encType='multipart/form-data'>
        <input type='file' onChange={this.createImage.bind(this)} />
      </form>
      // <form
      //   ref={input => this.imageForm = input}
      //   onSubmit={this.createImage}
      // >
      //   <input
      //     ref={input => this.title = input}
      //     type='text'
      //     placeholder='Image title'
      //   />
      //   <textarea
      //     ref={input => this.description = input}
      //     placeholder='Image description'
      //   />
      //   <input
      //     ref={input => this.image = input}
      //     type='text'
      //     placeholder='Image url'
      //   />
      //   <button type='submit'>+ Add Item</button>
      // </form>
    );
  }
}

export default AddImageForm;
