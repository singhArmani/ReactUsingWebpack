import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    render(){
        return <p>Hello React! I am being watched by webpack and it will run everytime there's changes.</p>;
    }
}

ReactDom.render(<App />, document.getElementById('app'))