import React from 'react';

export class DatumRow extends React.Component{
  render(){
    var d = this.props.datum;
    return(
      <tr>
        <td className="name">{d.name}</td>
        <td className="description">{d.description}</td>
      </tr>
    );
  }
};
export default DatumRow;
