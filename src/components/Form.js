import { Component } from "react"

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = ({ name, value }) => this.setState({ [name]: value })
  handleSubmit = () => {
    console.log(this.state)
  }

  render() {
    const form = {
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit
    }
    return this.props.render(form)
  }
}

export default Form