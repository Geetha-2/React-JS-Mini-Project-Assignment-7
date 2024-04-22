import {Link, withRouter} from 'react-router-dom'

import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import {IoMenu, IoClose} from 'react-icons/io5'
import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddLine} from 'react-icons/ri'

import ThemeContext from '../../context/ThemeContext'

import {
  NavContainer,
  WebsiteLogo,
  NavContentLg,
  NavMenuContainer,
  NavListItems,
  ThemeButton,
  NavContentSm,
  ProfileImg,
  LogOutButton,
  ModalContainer,
  ModalText,
  ButtonsContainer,
  CancelButton,
  ConfirmButton,
  MenuModalContainer,
  CloseButton,
  NavLink,
  SidebarItemsCont,
  TextContent,
  UnListSideBarContainer,
} from './styledComponents'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme, activeTab, changeTab} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const themeIcons = isDarkTheme ? (
        <FiSun size={25} color="#ffffff" />
      ) : (
        <FaMoon size={25} />
      )

      const menuIcons = isDarkTheme ? (
        <IoMenu size={25} color="#ffffff" />
      ) : (
        <IoMenu size={25} />
      )

      const logOutIcons = isDarkTheme ? (
        <FiLogOut size={25} color="#ffffff" />
      ) : (
        <FiLogOut size={25} />
      )

      const onClickConfirmBtn = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const color = isDarkTheme ? '#ffffff' : '#0f0f0f'

      const activeTabBg = isDarkTheme ? ' #313131' : '#e2e8f0'

      const onClickTabHome = () => {
        changeTab('Home')
      }

      const onClickTabTrending = () => {
        changeTab('Trending')
      }

      const onClickTabGaming = () => {
        changeTab('Gaming')
      }

      const onClickTabSaved = () => {
        changeTab('Saved')
      }

      return (
        <NavContainer isDarkTheme={isDarkTheme}>
          <NavContentSm>
            <Link to="/">
              <WebsiteLogo src={websiteLogo} alt="website logo" />
            </Link>
            <NavMenuContainer>
              <NavListItems>
                <ThemeButton
                  type="button"
                  data-testid="theme"
                  onClick={onToggleTheme}
                >
                  {themeIcons}
                </ThemeButton>
              </NavListItems>

              <NavListItems>
                <Popup
                  modal
                  trigger={
                    <ThemeButton type="button" data-testid="theme">
                      {menuIcons}
                    </ThemeButton>
                  }
                >
                  {close => (
                    <>
                      <MenuModalContainer isDarkTheme={isDarkTheme}>
                        <CloseButton
                          type="button"
                          data-testid="close"
                          onClick={() => close()}
                        >
                          <IoClose size={30} color={color} />
                        </CloseButton>

                        <UnListSideBarContainer>
                          <NavLink to="/">
                            <SidebarItemsCont
                              key="home"
                              bgColor={
                                activeTab === 'Home' ? activeTabBg : 'none'
                              }
                              onClick={onClickTabHome}
                            >
                              <AiFillHome
                                size={23}
                                color={
                                  activeTab === 'Home' ? ' #ff0b37' : '#909090'
                                }
                              />
                              <TextContent isDarkTheme={isDarkTheme}>
                                Home
                              </TextContent>
                            </SidebarItemsCont>
                          </NavLink>

                          <NavLink to="/trending">
                            <SidebarItemsCont
                              key="trending"
                              bgColor={
                                activeTab === 'Trending' ? activeTabBg : 'none'
                              }
                              onClick={onClickTabTrending}
                            >
                              <HiFire
                                size={23}
                                color={
                                  activeTab === 'Trending'
                                    ? ' #ff0b37'
                                    : '#909090'
                                }
                              />
                              <TextContent isDarkTheme={isDarkTheme}>
                                Trending
                              </TextContent>
                            </SidebarItemsCont>
                          </NavLink>

                          <NavLink to="/gaming">
                            <SidebarItemsCont
                              key="gaming"
                              bgColor={
                                activeTab === 'Gaming' ? activeTabBg : 'none'
                              }
                              onClick={onClickTabGaming}
                            >
                              <SiYoutubegaming
                                size={23}
                                color={
                                  activeTab === 'Gaming'
                                    ? ' #ff0b37'
                                    : '#909090'
                                }
                              />
                              <TextContent isDarkTheme={isDarkTheme}>
                                Gaming
                              </TextContent>
                            </SidebarItemsCont>
                          </NavLink>

                          <NavLink to="/saved-videos">
                            <SidebarItemsCont
                              key="saved"
                              bgColor={
                                activeTab === 'Saved' ? activeTabBg : 'none'
                              }
                              onClick={onClickTabSaved}
                            >
                              <RiMenuAddLine
                                size={23}
                                color={
                                  activeTab === 'Saved' ? ' #ff0b37' : '#909090'
                                }
                              />
                              <TextContent isDarkTheme={isDarkTheme}>
                                Saved videos
                              </TextContent>
                            </SidebarItemsCont>
                          </NavLink>
                        </UnListSideBarContainer>
                      </MenuModalContainer>
                    </>
                  )}
                </Popup>
              </NavListItems>

              <NavListItems>
                <Popup
                  modal
                  trigger={
                    <ThemeButton type="button" data-testid="theme">
                      {logOutIcons}
                    </ThemeButton>
                  }
                >
                  {close => (
                    <ModalContainer isDarkTheme={isDarkTheme}>
                      <ModalText isDarkTheme={isDarkTheme}>
                        Are you sure,you want to logout?
                      </ModalText>
                      <ButtonsContainer>
                        <CancelButton type="button" onClick={() => close()}>
                          Cancel
                        </CancelButton>
                        <ConfirmButton
                          type="button"
                          onClick={onClickConfirmBtn}
                        >
                          Confirm
                        </ConfirmButton>
                      </ButtonsContainer>
                    </ModalContainer>
                  )}
                </Popup>
              </NavListItems>
            </NavMenuContainer>
          </NavContentSm>

          <NavContentLg>
            <Link to="/">
              <WebsiteLogo src={websiteLogo} alt="website logo" />
            </Link>
            <NavMenuContainer>
              <NavListItems>
                <ThemeButton
                  type="button"
                  data-testid="theme"
                  onClick={onToggleTheme}
                >
                  {themeIcons}
                </ThemeButton>
              </NavListItems>
              <NavListItems>
                <ProfileImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </NavListItems>
              <NavListItems>
                <Popup
                  modal
                  trigger={
                    <LogOutButton type="button" isDarkTheme={isDarkTheme}>
                      Logout
                    </LogOutButton>
                  }
                >
                  {close => (
                    <ModalContainer isDarkTheme={isDarkTheme}>
                      <ModalText isDarkTheme={isDarkTheme}>
                        Are you sure you want to logout
                      </ModalText>
                      <ButtonsContainer>
                        <CancelButton type="button" onClick={() => close()}>
                          Cancel
                        </CancelButton>
                        <ConfirmButton
                          type="button"
                          onClick={onClickConfirmBtn}
                        >
                          Confirm
                        </ConfirmButton>
                      </ButtonsContainer>
                    </ModalContainer>
                  )}
                </Popup>
              </NavListItems>
            </NavMenuContainer>
          </NavContentLg>
        </NavContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
