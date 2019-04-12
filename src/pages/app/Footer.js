import React from 'react';
import axios from 'axios';

import { POOLSIDE_FM_STATUS, POOLSIDE_FM_STREAM } from 'utils/constants';
import Equalizer from './footer/Equalizer';
import { createPoller } from '../../utils/polling';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      musicTitle: null,
      musicArtworkUrl: null,
      musicArtworkUrlLarge: null
    };

    this.polling = createPoller(15);
  }

  componentDidMount() {
    this.fetchStatus();

    this.polling(() => {
      this.fetchStatus();
      return true;
    });
  }

  componentWillUnmount() {
    this.polling = undefined;
  }

  componentDidUpdate() {
    if (this.state.isPlaying) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  fetchStatus() {
    axios({ url: POOLSIDE_FM_STATUS, method: 'GET' })
      .then(response => {
        const currentTrack = response.data.current_track;
        this.setState({
          musicTitle: currentTrack.title,
          musicArtworkUrl: currentTrack.artwork_url,
          musicArtworkUrlLarge: currentTrack.artwork_url_large
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  renderEqualizer() {
    if (this.state.isPlaying) {
      return <Equalizer />;
    }
  }

  renderMusicTitle() {
    if (this.state.musicTitle) {
      return (
        <h4 style={{ color: '#ffffff', marginLeft: '1rem' }}>
          {this.state.musicTitle}
        </h4>
      );
    }
  }

  render() {
    return (
      <footer
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: '#212121',
          height: '3rem',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {this.state.isPlaying && (
          <button
            style={{
              color: '#212121',
              backgroundColor: '#faed37',
              padding: '0.5rem',
              textAlign: 'center',
              width: '8rem',
              fontFamily: 'Harman-Retro',
              margin: '0.5rem',
              border: '1px solid #fff'
            }}
            onClick={() => this.setState({ isPlaying: false })}
          >
            Pause
          </button>
        )}
        {!this.state.isPlaying && (
          <button
            style={{
              color: '#212121',
              backgroundColor: '#faed37',
              padding: '0.5rem',
              textAlign: 'center',
              width: '8rem',
              fontFamily: 'Harman-Retro',
              margin: '0.5rem',
              border: '1px solid #fff'
            }}
            onClick={() => this.setState({ isPlaying: true })}
          >
            Play
          </button>
        )}
        {this.renderEqualizer()}
        {this.renderMusicTitle()}
        <audio ref={ref => (this.player = ref)} src={POOLSIDE_FM_STREAM} />
      </footer>
    );
  }
}

export default Footer;
