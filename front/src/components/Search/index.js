import React from 'react';
import './searchStyles.css';

const Search = () => {
  
    /*let handleChange = event => {
      this.props.textChange(event);
    };*/
  
    return (
        <div className="search">
          <div className="input-container">
            <input placeholder="Search"/>
          </div>
        </div>
    );
}

export default Search;