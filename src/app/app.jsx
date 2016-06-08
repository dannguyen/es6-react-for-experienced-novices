import React from 'react';

export class App extends React.Component{
  render(){
    return(
      <div className="app">
        <h2>Hello React World!</h2>
        <p>
          Hello, my name is <a href="https://github.com/dannguyen">Dan Nguyen</a> and this
          is my <strong color="hotpink">first</strong> <strong style={{color: "hotpink"}}>webpage</strong> that
          I have built using the latest World Wide Web technologies of React and ES6 and HTML5.
        </p>
        <p>
          It took me just about 5 hours to create this page, which is rendered
          onto your computing device with <em>just</em> over 1.2 megabytes of computer code
          -- yes, you read that correctly: that's <strong>less</strong> than
          <a href="http://www.wired.com/2016/04/average-webpage-now-size-original-doom/all/1">half the size of DOOM</a>!

          <br />

          Such is the <strong> power of the World Wide Web!</strong>
        </p>
        <p>
          After a lifetime of mostly spaghetti jQuery and debugging via <code>alert()</code>,
          this is my exciting first step in a new journey of World Wide Web development!
        </p>

        <p>
          You can view my notes and even copy all of my meticulous source code data at:
          <br />
          <a href="https://github.com/dannguyen/es6-react-for-experienced-novices">
            https://github.com/dannguyen/es6-react-for-experienced-novices
          </a>
        </p>
      </div>)
  }
};

export default App;
