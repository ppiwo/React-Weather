import React, { Component } from 'react'

export class SearchBar extends Component {
    render() {
        return (
            <div className="searchBar">
                <form onSubmit={this.onSubmit}>
                    <input
                    style={{width: "788px"}} 
                    type="text"
                    name="city"
                    placeholder="Enter a city..."
                    // value = {this.state.title}
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
