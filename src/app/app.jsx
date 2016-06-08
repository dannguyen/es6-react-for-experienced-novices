import React from 'react';
import DataTable from './components/DataTable.jsx'

export class App extends React.Component{
  render(){
    return(
      <div className="app">
        <h2>Hello React World Table!</h2>
        <DataTable></DataTable>
      </div>
    )
  }
};

export default App;
