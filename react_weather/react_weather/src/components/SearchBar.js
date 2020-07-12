import React, { Component } from 'react';
import loadData from '../App';

import axios from 'axios';

export class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {location: 'ffhicago'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({location: event.target.value});
      }

    handleSubmit(event) {
        //make axios call to Geolocation API
        console.log('hi')
        event.preventDefault();
        this.props.loadLocation(this.state.location);
      }


    render() {
        return (
            <div className="searchBar">
                <form onSubmit={this.handleSubmit}>
                    <input
                    style={{width: "788px"}} 
                    type="text"
                    name="city"
                    placeholder="Enter a city..."
                    value = {this.state.location}
                    onChange={this.handleChange}
                    />
                    <input 
                    type="submit" 
                    value="Submit"
                    className="btn"
                    style={{flex: "1"}}
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar
