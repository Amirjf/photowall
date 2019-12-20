import React, {Component} from 'react';
import {Link, withRouter,} from 'react-router-dom';
import { BottomNavigationAction, BottomNavigation } from '@material-ui/core';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import RestoreIcon from '@material-ui/icons/Restore';
import HomeIcon from '@material-ui/icons/Home';

class MainNav extends Component {
  state = {
    value: 1,
    pathMap: [
        '/panoramas',
      '/',
      '/SignIn',
    ]
  };

  componentWillReceiveProps(newProps) {
    const {pathname} = newProps.location;
    const {pathMap} = this.state;

    const value = pathMap.indexOf(pathname);

    if (value > -1) {
      this.setState({
        value
      });
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const {value, pathMap} = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className="nav primary"
      >
        <BottomNavigationAction label="Panoramas" icon={<RestoreIcon style={{ fontSize: 30 }}/>} component={Link} to={pathMap[0]} />
        <BottomNavigationAction label="home" icon={<HomeIcon style={{ fontSize: 30 }}/>} component={Link} to={pathMap[1]} />
        <BottomNavigationAction label="Sign in" icon={<AssignmentIndIcon style={{ fontSize: 30 }}/>} component={Link} to={pathMap[2]} />
      </BottomNavigation>
    );
  }
}

export default withRouter(MainNav);