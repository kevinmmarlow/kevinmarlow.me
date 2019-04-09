import React from 'react';
import MediaQuery from 'react-responsive';

import unsplash from 'utils/unsplash';

class Today extends React.Component {
  state = {
    backgroundUrl: undefined,
    smallBackgroundUrl: undefined,
    photographer: ''
  };

  componentDidMount() {
    this.fetchBackground();
  }

  fetchBackground() {
    unsplash
      .get('/photos/random', {
        params: {
          featured: true,
          orientation: 'landscape'
        }
      })
      .then(response => {
        const { urls, user } = response.data;

        this.setState({
          backgroundUrl: urls.regular,
          smallBackgroundUrl: urls.small,
          photographer: user.name
        });
      })
      .catch(error => {
        console.error(error);

        this.setState({
          backgroundUrl: `${require('images/ocean-large.jpg')}`,
          smallBackgroundUrl: `${require('images/ocean-small.jpg')}`,
          photographer: 'Matt Howard'
        });
      });
  }

  renderBackground() {
    const { backgroundUrl, smallBackgroundUrl, photographer } = this.state;

    if (backgroundUrl) {
      return (
        <MediaQuery query="(min-device-width: 961px)">
          <div
            style={{
              width: '100%',
              height: '540px',
              alignItems: 'center',
              overflow: 'hidden'
            }}
          >
            <img
              style={{ width: '100%', display: 'block', objectFit: 'cover' }}
              src={backgroundUrl}
              alt={`by ${photographer}`}
            />
          </div>
        </MediaQuery>
      );
    }

    if (smallBackgroundUrl) {
      return (
        <MediaQuery query="(max-device-width: 960px)">
          <div
            style={{
              width: '100%',
              height: '540px',
              alignItems: 'center',
              overflow: 'hidden'
            }}
          >
            <img
              style={{ width: '100%', display: 'block', objectFit: 'cover' }}
              src={smallBackgroundUrl}
              alt={`by ${photographer}`}
            />
          </div>
        </MediaQuery>
      );
    }
  }

  renderOverlay() {
    const overlay = `${require('images/overlayVignette.png')}`;
    return (
      <div
        style={{
          backgroundSize: '100% 100%',
          position: 'absolute',
          zIndex: 2,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundImage: `url(${overlay})`
        }}
      />
    );
  }

  renderText() {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'flex',
          zIndex: 999,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h1 style={{ fontSize: '4rem', alignSelf: 'center', color: '#ffffff' }}>
          Good Evening Vivian
        </h1>
      </div>
    );
  }

  render() {
    return (
      <div
        style={{
          width: '100%',
          maxWidth: '960px',
          minHeight: '540px',
          position: 'relative'
        }}
      >
        {this.renderBackground()}
        {this.renderOverlay()}
        {this.renderText()}
      </div>
    );
  }
}

export default Today;
