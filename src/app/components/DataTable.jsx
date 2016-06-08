import React from 'react';


export class DataTable extends React.Component{
  make_rows(){
    var rows = ""
    this.props.records.forEach((item) => {
      rows += `<tr>
                  <td class="name">${item.name}</td>
                  <td class="description">${item.description}</td>
              </tr>`;
    });
    return {__html: rows};
  }

  render(){
    return(
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody dangerouslySetInnerHTML={this.make_rows()} />
      </table>
    );
  }
}

export default DataTable;
