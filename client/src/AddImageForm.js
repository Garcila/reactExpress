import React, { Component } from 'react';

class AddImageForm extends Component {
  createImage = (e) => {
    e.preventDefault(e);
    const image = {
      title: this.title.value,
      description: this.description.value,
      image: this.image.value
    };
    this.props.addImage(image);
    this.AddImageForm.reset();
  }

  render() {
    return (
      <form
        ref={ input => this.imageForm = input }
        onSubmit={this.createImage}
      >
        <input ref={(input) => this.title = input}
          type='text'
          placeholder='Image title'
        />
        <textarea
          ref={(input) => this.description = input}
          placeholder='Image description'
        >
        </textarea>
        <input
          ref={(input) => this.image = input}
          type='text'
          placeholder='Image image'
        />
        <button type='submit'>+ Add Item</button>
      </form>
    );
  }
}

export default AddImageForm;
