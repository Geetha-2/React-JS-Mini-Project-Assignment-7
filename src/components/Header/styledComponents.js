import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavContainer = styled.nav`
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#ffffff')};
  height: 60px;
  position: fixed;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
    height: 80px;
  }
`

export const NavContentLg = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 30px;
  }
`

export const NavContentSm = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const WebsiteLogo = styled.img`
  height: 25px;
  width: 110px;

  @media screen and (min-width: 768px) {
    height: 28px;
    width: 130px;
  }
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`

export const NavMenuContainer = styled.ul`
  display: flex;
`

export const NavListItems = styled.li`
  list-style-type: none;
  margin-right: 20px;
  margin-top: -14px;
`
export const ProfileImg = styled.img`
  height: 30px;
`
export const LogOutButton = styled.button`
  height: 32px;
  width: 85px;
  padding: 3px;
  background-color: transparent;
  border: 1px solid ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  border-radius: 3px;
  cursor: pointer;
  outline: none;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? ' #212121' : '#ffffff')};
  height: 18vh;
  width: 28vw;
  border-radius: 8px;
  padding: 10px;

  @media screen and (max-width: 767px) {
    width: 60vw;
    height: 25vh;
    padding: 35px;
  }
`

export const ModalText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#00306e')};

  @media screen and (max-width: 767px) {
    font-size: 19px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 18px;
`

export const CancelButton = styled.button`
  height: 38px;
  width: 75px;
  padding: 8px;
  background-color: transparent;
  border: 1px solid #94a3b8;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: #94a3b8;
  cursor: pointer;
  outline: none;
  border-radius: 2px;
  margin-right: 25px;
  margin-left: 25px;

  @media screen and (max-width: 767px) {
    font-size: 19px;
    padding: 11px;
    width: 90px;
    height: 45px;
  }
`
export const ConfirmButton = styled(CancelButton)`
  background-color: #3b82f6;
  border: none;
  color: #ffffff;
`

export const MenuModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? ' #212121' : '#ffffff')};
  height: 80vh;
  width: 65vw;
  border-radius: 8px;
  padding: 20px;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  margin-left: 300px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
`

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const UnListSideBarContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
  margin-top: 0px;
  flex-grow: 1;
`

export const SidebarItemsCont = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-left: 20px;
  cursor: pointer;
  outline: none;
`

export const TextContent = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
  margin-left: 30px;
`
