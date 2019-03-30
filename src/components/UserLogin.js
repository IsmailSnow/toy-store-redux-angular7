import React from 'react'
import PropTypes from 'prop-types'

import TextInput from './TextInput'

import '../styles/user-login.css'
import '../styles/form.css'

export class UserLogin extends React.Component {

  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  changeName(e) {
    this.setState({ value: e.target.value })
  }

  submitName(e) {
    e.preventDefault()
    const { value } = this.state
    const { submit } = this.props

    submit(value)
  }

  render() {
    const { value } = this.state

    return (
      <div className="FormWrapper UserLogin">
        <form>
          <TextInput
            name="user"
            label="Votre Nom"
            onChange={e => this.changeName(e)}
            value={value}
            className="TextInput"
          />

          <button
            className="Button"
            onClick={e => this.submitName(e)}
          >Login</button>
        </form>
      </div>
    )
  }
}

UserLogin.propTypes = {
  submit: PropTypes.func.isRequired
}

export default UserLogin
