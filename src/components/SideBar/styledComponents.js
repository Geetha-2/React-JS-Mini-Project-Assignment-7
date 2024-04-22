import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Navbar = styled.div`
  display: flex;
`

export const SidebarContainerLg = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    width: 20%;
    height: 92%;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    position: fixed;
    justify-content: space-between;
    background-color: ${props => (props.isDarkTheme ? '#231f20' : '#f1f5f9')};
  }
`

export const UnListSideBarContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin-top: 0px;
  flex-grow: 1;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const SidebarItemsCont = styled.li`
  list-style-type: none;
  display: flex;
  background-color: ${props => props.bgColor};
  padding-left: 20px;
  cursor: pointer;
  outline: none;
  padding-top: 15px;
`

export const TextContent = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: ${props => (props.activeTab ? 'bold' : 0)};
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
  margin-left: 15px;
  margin-top: 0px;
  padding-top: 4px;
`
export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 25px;
`

export const ContactUsHeading = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#475569')};
`
export const LogosContainer = styled.div`
  display: flex;
  align-items: center;
`

export const LogoImg = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50px;
  margin-right: 12px;
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#475569')};
  padding-bottom: 35px;
`
