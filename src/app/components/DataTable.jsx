import React from 'react';


export class DataTable extends React.Component{
  make_rows(){
    var data = [
      {
        name: 'Brian Kernighan',
        description: "Hello world"
      },
      {
         name: 'Titanic',
         description: "A big boat"
      },
      {
        name: 'Ruby',
        description: 'A language and also a gem'
      }
    ];

    var rows = ""
    data.forEach((item) => {
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
