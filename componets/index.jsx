import React from 'react';
import ReactDom from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';

class App extends React.Component {
    render(){
        return (
         <div>
          <p>Hello React!</p>
             <AwesomeComponent />
        </div> );
    }
}

ReactDom.render(<App />, document.getElementById('app'));