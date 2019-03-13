// Code ControlledInput Component Here

class ControlledInput extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  // handleFirstNameChange = (event) => {
  //   this.setState({firstName: event.target.value})
  // }
  // handleLastNameChange = (event) => {
  //   this.setState({lastName: event.target.value})
  // }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }


  render() {
    return (
      <form>
        <input type="text" name="firstName" value={this.state.firstName} onChange={event => this.handleChange(event)}/>
        <input type="text" name="lastName" value={this.state.lastName} onChange={event => this.handleChange(event)}/>
      </form>
    )
  }
}

export default ControlledInput
