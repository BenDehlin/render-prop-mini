import React from 'react'
import Form from './Form.js'

const LoginForm = props => (
  <Form render={form => {
    return (
      <div>
        <h1>Login Form</h1>
        <input
        type='text'
        name='email'
        placeholder='enter email'
        onChange={(e) => form.handleChange(e.target)}
        />
        <input 
        type='text'
        name='password'
        placeholder='enter password'
        onChange={(e) => form.handleChange(e.target)}
        />
      </div>
    )
  }} />
)

export default LoginForm