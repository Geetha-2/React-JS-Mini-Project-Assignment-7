import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const HomeBgContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818 ' : '#f9f9f9 ')};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-top: 50px;
  margin-bottom: 50px;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    width: 80vw;
    margin-left: 0px;
    margin-bottom: 250px;
    margin-top: 70px;
  }
`

export const BannerBgContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 27vh;
  width: 100%;
  padding: 25px;
  display: ${props => props.display};
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) {
    height: 30vh;
  }
`
export const PrepaidPlansCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 75vw;
`

export const LogoAndCloseIconCont = styled.div`
  display: flex;
  justify-content: space-between;
`

export const WebsiteLogo = styled.img`
  height: 38px;
  width: 150px;

  @media screen and (min-width: 768px) {
    height: 35px;
    width: 130px;
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`

export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  color: #1e293b;
`
export const Button = styled.button`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 600;
  border: 1px solid #1e293b;
  padding: 13px;
  height: 40px;
  width: 110px;
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #909090;
  border-radius: 3px;
  width: 100%;
  margin: 30px;
  height: 41px;

  @media screen and (min-width: 576px) {
    width: 500px;
    margin-left: 50px;
  }
`
export const SearchInput = styled.input`
  background-color: transparent;
  padding: 10px;
  cursor: pointer;
  outline: none;
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#181818')};
  width: 450px;
  border: none;
`

export const SearchButton = styled.button`
  background-color: ${props => (props.isDarkTheme ? '#424242' : '#cccccc')};
  padding: 5px;
  width: 80px;
  cursor: pointer;
  outline: none;
  border: none;
  height: 39px;
  border-left: 1px solid #909090;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
