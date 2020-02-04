import React from 'react'
import Form from './FormHooks'

const RegistrationForm = () => (
  <Form render={(handleChange, handleSubmit) => (
    <div>
      <h1>Registration Form</h1>
      <input
      type='text'
      name='name'
      placeholder='enter name'
      onChange={(e) => handleChange(e.target)}
      />
      <input
      type='text'
      name='email'
      placeholder='enter email'
      onChange={(e) => handleChange(e.target)}
      />
      <input
      type='password'
      name='password'
      placeholder='enter password'
      onChange={(e) => handleChange(e.target)}
      />
      <input
      type='password'
      name='confirmPassword'
      placeholder='confirm password'
      onChange={(e) => handleChange(e.target)}
      />
      <button onClick = {() => handleSubmit()}>Submit</button>
    </div>
  )} />
)

export default RegistrationForm