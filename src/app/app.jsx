import $ from 'jquery';

import React from 'react';
import FilterableTable from './components/FilterableTable.jsx'

export class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {records: []};
  }

  fetchData(){
    $.get(this.props.dataUrl, (results) => {
      console.log(results.items.length);
      this.setState({records: results.items})
    })
  }

  componentDidMount(){
    this.fetchData();
  }

  render(){
    return(
      <div className="app">
        <h2>Hello React Filterable Table!</h2>
        <FilterableTable records={this.state.records}></FilterableTable>
      </div>
    )
  }
};

export default App;
