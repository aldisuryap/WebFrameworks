import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import HelloComponent from './Component/HelloComponent';
import StatefullComponent from './Container/StatefullComponent';
import Form1 from './Component/Form1';
import * as serviceWorker from './serviceWorker';

// const HelloWorld = () => {
//     return <p>Ini adalah function component</p>
// }

// class Statefullcomponent extends React.Component {
//     render() {
//         return <p>Ini adalah Statefull Aldi Surya Pranata dan Denatan Bagus Firmansyah</p>
//     }
// }

class Greeting extends React.Component {
    rende() {
        return <h1>Hello, {this.props.name}</h1>
    }
}

ReactDOM.render(<Form1 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
