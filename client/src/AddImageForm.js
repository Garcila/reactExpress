import React, { Component } from 'react';
import { Button, Form, Segment, TextArea } from 'semantic-ui-react';

class AddImageForm extends Component {
  // get information from the form, create object with it and reset

  createImage = event => {
    event.preventDefault();
    const image = {
      file_source: this.file_source,
      title: this.title.value,
      description: this.description.value
    };

    this.props.AddImage(image);
    this.imageForm.reset();
  };

  render() {
    return (
      <Form
        name="file"
        ref={input => (this.imageForm = input)}
        encType="multipart/form-data"
        onSubmit={this.createImage.bind(this)}
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
        <TextArea
          ref={input => (this.description = input)}
          rows="1"
          cols="50"
          placeholder="Say something about this face"
        />
        <Button type="submit">+ Add Images</Button>
      </Form>
    );
  }
}

export default AddImageForm;

// {/* <form
//   name="file"
//   ref={input => (this.imageForm = input)}
//   encType="multipart/form-data"
//   onSubmit={this.createImage.bind(this)}
// >
//   <input
//     type="file"
//     name="file"
//     multiple
//     ref={input => (this.file_source = input)}
//   />
//   <input
//     type="text"
//     ref={input => (this.title = input)}
//     placeholder="Image title or empty to use filename"
//   />
//   <textarea ref={input => (this.description = input)} />
//   <button type="submit">+ Add Images</button>
// </form> */}
