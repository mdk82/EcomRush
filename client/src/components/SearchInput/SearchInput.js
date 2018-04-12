import React from 'react';
import PropTypes from 'prop-types';
import './SearchInput.css';

class SearchInput extends React.Component{

  static propTypes = {
    search: PropTypes.string,
    updateSearch: PropTypes.func
  }

  handleSearch = event => {
    const updatedSearch = event.target.value.substr(0,50)
    this.props.updateSearch(updatedSearch)
  };

  render(){
    return (
      <div>
        <input className="search" name="search" placeholder="Search" value={this.props.search} type="search" aria-label="Search" onChange={this.handleSearch} />
      </div>
    );
  }
}

export default SearchInput;
