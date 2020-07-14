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
        console.log('handleSubmit')
        event.preventDefault();
        this.props.loadLocation(this.state.location);
      }


    render() {
        return (
            <div className="searchBar">
                <form onSubmit={this.handleSubmit}>
                    <input
                    className="searchInput"
                    type="text"
                    name="city"
                    placeholder="Enter a city..."
                    value = {this.state.location}
                    onChange={this.handleChange}
                    />
                    <input
                    style={buttonStyle}
                    variant="info"
                    type="submit" 
                    value="Submit"
                    className="btn"
                    />
                </form>
            </div>
        )
    }
}

const buttonStyle = {
    // boxShadow: '0px 1px 0px 0px #f0f7fa',
	background:'linear-gradient(to bottom, #33bdef 5%, #019ad2 100%)',
	backgroundColor:'#33bdef',
	borderRadius:'6px',
	border:'1px solid #057fd0',
	display:'inline-block',
	cursor:'pointer',
	color:'#ffffff',
	fontFamily:'Arial',
	fontSize:'17px',
	fontWeight:'bold',
	padding:'10px 24px',
	textDecoration:'none',
	// textShadow:'0px -1px 0px #5b6178'
}

export default SearchBar
