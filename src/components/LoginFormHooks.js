import React from 'react'
import Form from './FormHooks'

const LoginForm = () => (
  <Form render={(handleChange, handleSubmit) => (
    <div>
      <h1>Login Form</h1>
      <input 
      type='text'
      name='email'
      placeholder='enter email'
      onChange = {(e) => handleChange(e.target)}
      />
      <input
      type='password'
      name='password'
      placeholder='enter password'
      onChange={(e) => handleChange(e.target)}
      />
      <button
      onClick = {() => handleSubmit()}
      >Submit</button>
    </div>
  )} />
)

export default LoginForm