import $ from 'jquery';

import React from 'react';
import DataTable from './components/DataTable.jsx'

export class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {records: []};
  }

  fetchData(){
    $.get(this.props.dataUrl, (results) => {
      this.setState({records: results.items})
    })
  }

  componentDidMount(){
    this.fetchData();
  }

  render(){
    return(
      <div className="app">
        <h2>Hello React World Table!</h2>
        <DataTable records={this.state.records}></DataTable>
      </div>
    )
  }
};

export default App;
