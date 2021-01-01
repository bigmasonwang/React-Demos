// inport the React and ReactDOM 
import React from 'react';
import ReactDOM from 'react-dom';

// Creat a React component
const App = () => {
    return (
    <div>
        <h1>Hi there!</h1>
        <button style={{backgroundColor: 'blue', color: 'white'}}>Submit</button>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.getElementById('root')
);