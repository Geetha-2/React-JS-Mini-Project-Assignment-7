import {Component} from 'react'

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  LoginBgColorContainer,
  LoginFormContainer,
  LoginWebsiteLogo,
  LabelElement,
  InputElement,
  ShowPasswordContainer,
  CheckboxInput,
  ShowPasswordText,
  LoginButton,
  ErrorMsgText,
} from './styledComponents'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    isDarkTheme: false,
    isCheckedPassword: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      showSubmitError: true,
      errorMsg,
    })
  }

  submitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}

    const loginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(loginUrl, options)
    const loginData = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(loginData.jwt_token)
    } else {
      this.onSubmitFailure(loginData.error_msg)
    }
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  renderPasswordField = () => {
    const {password, isDarkTheme, isCheckedPassword} = this.state
    return (
      <>
        <LabelElement htmlFor="password" isDarkTheme={isDarkTheme}>
          PASSWORD
        </LabelElement>
        <InputElement
          type={isCheckedPassword ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  renderUsernameField = () => {
    const {username, isDarkTheme} = this.state
    return (
      <>
        <LabelElement htmlFor="username" isDarkTheme={isDarkTheme}>
          USERNAME
        </LabelElement>
        <InputElement
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  showAndHidePassword = () => {
    this.setState(prevState => ({
      isCheckedPassword: !prevState.isCheckedPassword,
    }))
  }

  render() {
    const {showSubmitError, errorMsg, isCheckedPassword} = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const websiteLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginBgColorContainer isDarkTheme={isDarkTheme}>
              <LoginFormContainer
                isDarkTheme={isDarkTheme}
                onSubmit={this.submitForm}
              >
                <LoginWebsiteLogo alt="website logo" src={websiteLogo} />
                {this.renderUsernameField()}
                {this.renderPasswordField()}
                <ShowPasswordContainer>
                  <CheckboxInput
                    type="checkbox"
                    id="checkPassword"
                    checked={isCheckedPassword}
                    onChange={this.showAndHidePassword}
                  />
                  <ShowPasswordText
                    htmlFor="checkPassword"
                    isDarkTheme={isDarkTheme}
                  >
                    Show Password
                  </ShowPasswordText>
                </ShowPasswordContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showSubmitError && <ErrorMsgText>*{errorMsg}</ErrorMsgText>}
              </LoginFormContainer>
            </LoginBgColorContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginRoute
