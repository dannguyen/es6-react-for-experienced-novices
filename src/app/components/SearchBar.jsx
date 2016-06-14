import React from 'react';


export class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {filterText: ''};
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(){
    this.props.onUserInput(  // this calls parent onUserInput foo
      this.refs.filterTextInput.value
    );
  }

  render(){
    return(
      <div className="search-bar">
          <input value={this.props.filterText}
                 placeholder="Search..."
                 ref="filterTextInput"
                 onChange={this.handleFilterChange}
                 type="text">
          </input>
      </div>
    );
  }
};


export default SearchBar;
