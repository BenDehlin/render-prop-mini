import React from 'react';
import './App.css';
import LoginForm from './components/LoginFormHooks'
import RegistrationForm from './components/RegistrationFormHooks'

function App() {
  return (
    <div className="App">
      <LoginForm />
      <RegistrationForm />
    </div>
  );
}

export default App;