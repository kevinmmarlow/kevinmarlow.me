import React from 'react';

import unsplash from 'utils/unsplash';
import quotes from 'utils/quotes';

import './Today.css';

class Today extends React.Component {
  state = {
    backgroundUrls: undefined,
    photographer: '',
    quote: '',
    author: ''
  };

  componentDidMount() {
    this.fetchBackground();
    this.fetchQuote();
  }

  fetchBackground() {
    unsplash
      .get('/photos/random', {
        params: {
          featured: true,
          orientation: 'landscape',
          query: 'nature'
        }
      })
      .then(response => {
        const { urls, user } = response.data;

        this.setState({
          backgroundUrls: urls,
          photographer: user.name
        });
      })
      .catch(error => {
        console.error(error);

        this.setState({
          backgroundUrls: {
            raw: `${require('images/ocean-large.jpg')}`,
            full: `${require('images/ocean-large.jpg')}`,
            regular: `${require('images/ocean-large.jpg')}`,
            small: `${require('images/ocean-small.jpg')}`,
            thumb: `${require('images/ocean-small.jpg')}`
          },
          photographer: 'Matt Howard'
        });
      });
  }

  fetchQuote() {
    quotes
      .get('/qod', {
        params: {
          category: 'inspire'
        },
        headers: {
          Accept: 'application/json'
        }
      })
      .then(response => {
        const { quotes } = response.data.contents;

        if (quotes.length > 0) {
          const { quote, author } = quotes[0];

          this.setState({
            quote: `${quote}`,
            author: `${author}`
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  renderBackground() {
    const { backgroundUrls, photographer } = this.state;

    if (backgroundUrls) {
      const { raw, full, regular, small, thumb } = backgroundUrls;
      return (
        <div className="background-image">
          <picture>
            <source
              alt={`by ${photographer}`}
              media="(min-width: 961px and (min-device-pixel-ratio: 2 or min-resolution: 192dpi or min-resolution: 2dppx))"
              srcSet={raw}
            />
            <source
              alt={`by ${photographer}`}
              media="(min-width: 961px)"
              srcSet={full}
            />
            <source
              alt={`by ${photographer}`}
              media="(min-width: 401px and max-width: 960px)"
              srcSet={regular}
            />
            <source
              alt={`by ${photographer}`}
              media="(min-width: 201px and max-width: 400px)"
              srcSet={small}
            />
            <source
              alt={`by ${photographer}`}
              media="(max-width: 200px)"
              srcSet={thumb}
            />
            <img src={regular} alt={`by ${photographer}`} />
          </picture>
        </div>
      );
    }
  }

  renderOverlay() {
    return <div className="overlay-vignette" />;
  }

  renderQuote() {
    const { quote, author } = this.state;
    return (
      <div className="quote-container">
        <h1>{quote}</h1>
        <br />
        <p>{author}</p>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        {this.renderBackground()}
        {this.renderOverlay()}
        {this.renderQuote()}
      </div>
    );
  }
}

export default Today;
