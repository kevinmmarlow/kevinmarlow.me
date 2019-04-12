import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Header.css';

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
      const isSelected = this.props.location.pathname === path;

      return (
        <li className={isSelected ? 'selected' : undefined} key={name}>
          <Link
            className={isSelected ? 'selected' : undefined}
            key={name}
            to={path}
          >
            {name}
          </Link>
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

export default withRouter(Header);
