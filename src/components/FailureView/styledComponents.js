import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`

export const FailureImg = styled.img`
  height: 280px;
  width: 300px;
  @media screen and (max-width: 768px) {
    height: 200px;
    width: 230px;
  }
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#1e293b')};
`

export const FailureText = styled.p`
  font-family: 'Roboto';
  font-size: 17px;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#616e7c')};
  text-align: center;
`

export const RetryButton = styled.button`
  cursor: pointer;
  outline: none;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: #ffffff;
  border-radius: 5px;
  background-color: #4f46e5;
  padding: 8px;
  border: none;
  width: 100px;
  height: 40px;
`
