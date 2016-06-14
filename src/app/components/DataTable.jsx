import React from 'react';
import DatumRow from './DatumRow.jsx'

export class DataTable extends React.Component{
  make_rows(){
    var rows = []
    this.props.records.forEach((item) => {
      rows.push(<DatumRow key={item.name} datum={item} />)
    });
    return rows;
  }

  render(){
    var rows = this.make_rows();
    return(
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Stars</th>
            <th>Issues</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

export default DataTable;
