import styled from 'styled-components'

export const GamingContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`

export const GamingVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-bottom: 60px;
  margin-top: 60px;
  overflow-y: auto;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};

  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-top: 80px;
    width: 80vw;
  }
`

export const GamingVideosIconAndNameCont = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ebebeb')};
  display: flex;
  align-items: center;
  height: 90px;
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 120px;
  }
`

export const GamingVideosName = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#0f0f0f')};

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const IconCont = styled.div`
  margin-right: 20px;
  margin-left: 30px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#cbd5e1')};
  border-radius: 80px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: 75px;
    width: 78px;
    margin-left: 60px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
export const GamingVideosList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px;

  @media screen and (max-width: 567px) {
    margin: 0px;
  }

  @media screen and (min-width: 576px) {
    margin: 30px;
    margin-right: 10px;
  }

  @media screen and (min-width: 768px) {
    margin: 50px;
    margin-right: 10px;
  }
`
