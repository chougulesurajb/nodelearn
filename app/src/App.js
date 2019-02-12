import React, { Component } from 'react';
// import logo from './logo.svg';
import ToDoApp from './Component/ToDoApp/ToDoApp';
import './App.css';

import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
class App extends Component {
  render() {
    return (
      <div className="">
        <ToDoApp />
        <Alert position='top-right' stack={{ limit: 3 }} />
      </div>
    );
  }
}

export default App;
