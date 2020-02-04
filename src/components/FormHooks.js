import {useState} from 'react'

const Form = ({render}) => {
  const [state, setState] = useState({})
  const handleChange = ({name, value}) => setState({...state, [name]: value}) 
  const handleSubmit = () => console.log(state)
  // const form = {
  //   handleChange,
  //   handleSubmit
  // }
  return render(handleChange, handleSubmit)
}

export default Form