import React from 'react';
import { withStyles, Typography } from '@material-ui/core';
import axios from 'axios';

import { POOLSIDE_FM_STATUS, POOLSIDE_FM_STREAM } from 'utils/constants';
import Equalizer from './footer/Equalizer';
import { createPoller } from '../../utils/polling';

const styles = theme => ({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#000000',
    height: '3rem',
    display: 'flex',
    alignItems: 'center'
  },
  playPauseButton: {
    color: '#ffffff',
    backgroundColor: '#5995da' /* Blue */,
    fontWeight: 'bold',
    padding: '0.5rem',
    textAlign: 'center',
    borderRadius: '5px',
    width: '8rem',
    margin: '0.5rem'
  },
  musicTitle: {
    color: '#ffffff',
    marginLeft: '1rem'
  }
});

class Footer extends React.Component {
  state = {
    isPlaying: false,
    musicTitle: null,
    musicArtworkUrl: null,
    musicArtworkUrlLarge: null
  };

  componentDidMount() {
    this.fetchStatus();

    const polling = createPoller(15);
    polling(() => {
      this.fetchStatus();
      return true;
    });
  }

  componentDidUpdate() {
    if (this.state.isPlaying) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  fetchStatus() {
    axios({ url: POOLSIDE_FM_STATUS, method: 'GET' }).then(response => {
      const currentTrack = response.data.current_track;
      this.setState({
        musicTitle: currentTrack.title,
        musicArtworkUrl: currentTrack.artwork_url,
        musicArtworkUrlLarge: currentTrack.artwork_url_large
      });
    });
  }

  renderEqualizer() {
    if (this.state.isPlaying) {
      return <Equalizer />;
    }
  }

  renderMusicTitle() {
    if (this.state.musicTitle) {
      const { classes } = this.props;
      return (
        <Typography className={classes.musicTitle} variant="title">
          {this.state.musicTitle}
        </Typography>
      );
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <footer>
        <div className={classes.footer}>
          {this.state.isPlaying && (
            <button
              className={classes.playPauseButton}
              onClick={() => this.setState({ isPlaying: false })}
            >
              Pause
            </button>
          )}
          {!this.state.isPlaying && (
            <button
              className={classes.playPauseButton}
              onClick={() => this.setState({ isPlaying: true })}
            >
              Play
            </button>
          )}
          {this.renderEqualizer()}
          {this.renderMusicTitle()}
          <audio ref={ref => (this.player = ref)} src={POOLSIDE_FM_STREAM} />
        </div>
      </footer>
    );
  }
}

export default withStyles(styles)(Footer);
