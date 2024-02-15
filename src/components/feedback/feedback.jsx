import React, { Component } from 'react';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h1>feedback</h1>
        <button>Good: </button>
        <button>Neutral</button>
        <button>Bad</button>
      </>
    );
  }
}
