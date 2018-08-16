import React, { Component } from 'react';
import './App.css';
import CreateThought from './createThought/createThought';
import { ThoughtList } from './thoughtList/thoughtList';
import ThoughtCard from './thoughtCard/thoughtCard.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      thoughts: []
    };
  }

  createThought = (thought) => {
    const newThought = {...thought, id: Date.now()}
    const thoughts = [...this.state.thoughts, newThought]
    this.setState({
      thoughts
    });
  }

  removeCard = (id) => {
    console.log(id)
    const thoughts = this.state.thoughts.filter(thought => thought.id !== id);
    this.setState({
      thoughts
    })
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <h2>ThoughtBox</h2>
        </div>
        <CreateThought createThought={this.createThought} />
        <div>
          <ThoughtList 
          thoughts={this.state.thoughts}
          remove={this.removeCard}
           />
        </div>
      </div>
    );
  }
}

export default App;