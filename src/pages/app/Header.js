import React from 'react';
import { withStyles, AppBar, Tabs, Tab } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = theme => ({
  appRoot: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
    width: '100%'
  },
  appBar: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  grow: {
    flexGrow: 1
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  noIndicator: {
    display: 'none'
  }
});

class Header extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  renderNavItems() {
    const { classes, children } = this.props;
    return children.map(({ path, name }) => {
      return (
        <Tab
          className={classes.navItem}
          label={name}
          component={Link}
          to={path}
          key={name}
        />
      );
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.appBar}>
        <AppBar showMenuIconButton={false} position="static" color="primary">
          <Tabs
            classes={{ indicator: classes.noIndicator }}
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            centered
          >
            {this.renderNavItems()}
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
