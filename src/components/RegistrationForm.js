import React from 'react'
import Form from './Form.js'

const RegistrationForm = props => (
  <Form render={form => {
    return (
      <div>
        <h1>Login Form</h1>
        <input 
        type='text'
        name='name'
        placeholder='enter name'
        onChange={(e) => form.handleChange(e.target)}
        />
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
        <input 
        type='text'
        name='confirmPassword'
        placeholder='confirm password'
        onChange={(e) => form.handleChange(e.target)}
        />
        <button onClick = {() => form.handleSubmit()}>Submit</button>
      </div>
    )
  }} />
)

export default RegistrationForm