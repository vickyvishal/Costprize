import React, { Component } from 'react';
import SignUpForm from './form.js';
import LoginForm from './login'
//import ProjectList from './project_list';


export default class App extends Component {
  render() {
    return (
      <div>
      	{this.props.children}
      </div>
    );
  }
}
