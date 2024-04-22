import styled from 'styled-components'

export const LoginBgColorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#f9f9f9')};
`

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
  border-radius: 5px;
  padding: 20px;
  height: 450px;
  width: 400px;

  @media screen and (min-width: 768px) {
    height: 480px;
    width: 430px;
    padding: 40px;
  }
`

export const LoginWebsiteLogo = styled.img`
  height: 40px;
  width: 150px;
  margin: 20px;
  align-self: center;

  @media screen and (min-width: 768px) {
    height: 45px;
    width: 170px;
    margin: 40px;
  }
`
export const LabelElement = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#7e858e')};
  margin-top: 17px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`

export const InputElement = styled.input`
  height: 45px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 15px;
  border-radius: 3px;
  border: 1px solid #94a3b8;
  padding: 15px;
  font-family: 'Roboto';
  font-size: 15px;
  color: #7e858e;
  cursor: pointer;
  outline: none;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    height: 38px;
    font-size: 12px;
  }
`
export const ShowPasswordContainer = styled.div`
  display: flex;
`

export const CheckboxInput = styled.input`
  height: 20px;
  width: 20px;
  background-color: #ffffff;
  cursor: pointer;
  outline: none;

  @media screen and (min-width: 768px) {
    height: 17px;
    width: 17px;
  }
`

export const ShowPasswordText = styled.label`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
  margin-top: 2px;
  margin-left: 7px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin-top: 3px;
  }
`
export const LoginButton = styled.button`
  height: 45px;
  background-color: #3b82f6;
  border: none;
  margin-top: 10px;
  border-radius: 10px;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
  outline: none;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    height: 40px;
    margin-top: 15px;
  }
`
export const ErrorMsgText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ff0000;
`
