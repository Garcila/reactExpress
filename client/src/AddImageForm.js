import React, { Component } from 'react';

class AddImageForm extends Component {
  // get information from the form, create object with it and reset
  createImage = (event) => {
    event.preventDefault();
    const image = {
      file_source: this.file_source,
    };

    this.props.AddImage(image);
    this.imageForm.reset();
  }

  render() {
    return (
      <form
        action=''
        name='file'
        ref={input => this.imageForm = input}
        encType='multipart/form-data'
        onSubmit={this.createImage.bind(this)}
      >
        <input type='file'
          name='file'
          multiple
          ref={input => this.file_source = input}

          // onChange={this.createImage.bind(this)}
        />
        <input
          ref={input => this.title = input}
          type='text'
          placeholder='Image title'
        />
        <button type='submit'>add</button>
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
