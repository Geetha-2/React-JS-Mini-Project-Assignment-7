import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`
export const NotFoundCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-bottom: 60px;
  margin-top: 60px;
  overflow-y: auto;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};

  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-top: 80px;
    width: 80vw;
  }
`
export const NotFoundImg = styled.img`
  height: 350px;
  width: 380px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    height: 400px;
    width: 500px;
  }
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
  margin-bottom: 0px;

  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`

export const NotFoundText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#64748b')};

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
