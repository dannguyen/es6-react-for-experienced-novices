import React from 'react';


export class DataTable extends React.Component{
  render(){
    return(
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Brian Kernighan</td>
            <td>Hello world</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default DataTable;
