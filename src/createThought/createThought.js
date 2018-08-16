import React, { Component } from 'react';
import './createThought.css'

class CreateThought extends Component {
  constructor() {
    super()
    this.state = ({
      title: '',
      body: ''
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createThought(this.state)
    this.setState({
      title: '',
      body: ''
    })
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}
            value={this.state.title} 
            name="title"
            className='inputs'
            placeholder='title'
          />
          <br />
          <br />
          <input onChange={this.handleChange}
            value={this.state.body} 
            name="body"
            className='inputs'
            placeholder='body'
          />
          <br />
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateThought;