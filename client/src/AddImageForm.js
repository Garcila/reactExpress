import React, { Component } from 'react';
import './AddImageForm.css';

class AddImageForm extends Component {
  // get information from the form, create object with it and reset

  createImage = event => {
    event.preventDefault();
    console.log('event from createImage', this)
    const image = {
      file_source: this.file_source,
      title: this.title.value,
      description: this.description.value
    };
    console.log('image const', image);

    this.props.AddImage(image);
    this.imageForm.reset();
  };

  render() {
    return (
      <div className="add-image-container">
        <form
          className="add-image-edit"
          name="file"
          ref={input => (this.imageForm = input)}
          encType="multipart/form-data"
          onSubmit={this.createImage}
        >
          <input
            type="file"
            name="file"
            multiple
            ref={input => (this.file_source = input)}
          />
          <input
            type="text"
            ref={input => (this.title = input)}
            placeholder="Image title or empty to use filename"
          />
          <textarea
            ref={input => (this.description = input)}
            rows="1"
          ></textarea>
          <button type="submit">+ Add Images</button>
        </form>
      </div>
    );
  }
}

export default AddImageForm;
