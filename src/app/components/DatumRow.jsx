import React from 'react';

export class DatumRow extends React.Component{
  render(){
    var d = this.props.datum;
    return(
      <tr>
        <td className="name">
          <a href={d.svn_url}>{d.name}</a>
        </td>
        <td className="description">{d.description}</td>
        <td className="stargazers_count">{d.stargazers_count}</td>
        <td className="open_issues_count">{d.open_issues_count}</td>
      </tr>
    );
  }
};
export default DatumRow;
