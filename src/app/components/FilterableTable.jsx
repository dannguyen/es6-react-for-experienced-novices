import React from 'react';
import DataTable from './DataTable.jsx';
import SearchBar from './SearchBar.jsx';

export class FilterableTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {filterText: ""};
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(filterText){
    this.setState({filterText: filterText})
    console.log(this.state.filterText)
  }

  render(){
    return(
      <div className="filterable-table">
        <SearchBar filterText={this.state.filterText}
          onUserInput={this.handleUserInput}>
        </SearchBar>
        <DataTable filterText={this.state.filterText} records={this.props.records}></DataTable>
      </div>
    );
  }
};

export default FilterableTable;
