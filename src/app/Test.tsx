import React, { Component } from 'react';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
    this.audio = new Audio('/path-to-your-audio-file.mp3'); // Replace with the path to your audio file
  }

  togglePlay = () => {
    if (this.state.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.setState({ isPlaying: !this.state.isPlaying });
  }

  render() {
    return (
      <div>
        <h1>Music Player</h1>
        <button onClick={this.togglePlay}>
          {this.state.isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    );
  }
}

export default Player;