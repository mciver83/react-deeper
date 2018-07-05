import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import SuperPrivate from './components/SuperPrivate'
import OnOffButton from './components/OnOffButton'

import LoginFormRP from './components/LoginFormRP'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginForm title='login'/>
        <RegistrationForm />
        <SuperPrivate loggedIn={true} data='my favorite place is Hawaii' >
        </SuperPrivate>
        <OnOffButton />
        <LoginFormRP title='another login form' />
      </div>
    );
  }
}

export default App;
