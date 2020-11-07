import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import axios from 'axios';

const styles = (theme) => ({
  root: {
    background: '#282C34',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '92%',
    margin: 'auto',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: '#e6e5e8',
  },
  iconButton: {
    padding: 10,
    color: '#8a85ff',
  },
  divider: {
    height: 28,
    margin: 4,
    background: '#e6e5e8',
  },
});

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ location: event.target.value });
  }

  handleSubmit(event) {
    //make axios call to Geolocation API
    event.preventDefault();
    this.props.loadLocation(this.state.location);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="searchBar">
        <Paper
          onSubmit={this.handleSubmit}
          component="form"
          className={classes.root}
        >
          <InputBase
            className={classes.input}
            placeholder="Search City or Zip Code"
            inputProps={{ 'aria-label': 'Search City or Zip Code' }}
            value={this.state.location}
            onChange={this.handleChange}
          />
          <Divider className={classes.divider} orientation="vertical" />
          <IconButton
            color="primary"
            className={classes.iconButton}
            aria-label="directions"
            type="submit"
            value="Submit"
          >
            <ArrowForwardIcon />
          </IconButton>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(SearchBar);
