import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  renderNavItems() {
    const { children } = this.props;
    return children.map(({ path, name }) => {
      return (
        <li key={name}>
          <Link
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            key={name}
            to={path}
          />
          {name}
        </li>
      );
    });
  }

  render() {
    return (
      <header>
        <nav>
          <ul>{this.renderNavItems()}</ul>
        </nav>
      </header>
    );
  }
}

export default Header;
