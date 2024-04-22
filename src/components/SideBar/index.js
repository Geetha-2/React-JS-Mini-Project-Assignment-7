import {Component} from 'react'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddLine} from 'react-icons/ri'

import ThemeContext from '../../context/ThemeContext'

import {
  Navbar,
  SidebarContainerLg,
  SidebarItemsCont,
  TextContent,
  ContactUsContainer,
  ContactUsHeading,
  LogosContainer,
  LogoImg,
  UnListSideBarContainer,
  Paragraph,
  NavLink,
} from './styledComponents'

class SideBar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, activeTab, changeTab} = value

          const activeTabBg = isDarkTheme ? ' #313131' : '#cbd5e1'

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
            <Navbar>
              <SidebarContainerLg isDarkTheme={isDarkTheme}>
                <UnListSideBarContainer>
                  <NavLink to="/">
                    <SidebarItemsCont
                      key="home"
                      bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                      onClick={onClickTabHome}
                    >
                      <AiFillHome
                        size={23}
                        color={activeTab === 'Home' ? ' #ff0b37' : '#909090'}
                      />
                      <TextContent
                        isDarkTheme={isDarkTheme}
                        activeTab={activeTab}
                      >
                        Home
                      </TextContent>
                    </SidebarItemsCont>
                  </NavLink>

                  <NavLink to="/trending">
                    <SidebarItemsCont
                      key="trending"
                      bgColor={activeTab === 'Trending' ? activeTabBg : 'none'}
                      onClick={onClickTabTrending}
                    >
                      <HiFire
                        size={23}
                        color={
                          activeTab === 'Trending' ? ' #ff0b37' : '#909090'
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
                      bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
                      onClick={onClickTabGaming}
                    >
                      <SiYoutubegaming
                        size={23}
                        color={activeTab === 'Gaming' ? ' #ff0b37' : '#909090'}
                      />
                      <TextContent isDarkTheme={isDarkTheme}>
                        Gaming
                      </TextContent>
                    </SidebarItemsCont>
                  </NavLink>

                  <NavLink to="/saved-videos">
                    <SidebarItemsCont
                      key="saved"
                      bgColor={activeTab === 'Saved' ? activeTabBg : 'none'}
                      onClick={onClickTabSaved}
                    >
                      <RiMenuAddLine
                        size={23}
                        color={activeTab === 'Saved' ? ' #ff0b37' : '#909090'}
                      />
                      <TextContent isDarkTheme={isDarkTheme}>
                        Saved videos
                      </TextContent>
                    </SidebarItemsCont>
                  </NavLink>
                </UnListSideBarContainer>

                <ContactUsContainer>
                  <ContactUsHeading isDarkTheme={isDarkTheme}>
                    CONTACT US
                  </ContactUsHeading>
                  <LogosContainer>
                    <LogoImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                    />

                    <LogoImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="twitter logo"
                    />

                    <LogoImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                    />
                  </LogosContainer>
                  <Paragraph isDarkTheme={isDarkTheme}>
                    Enjoy! Now to see your channels and recommendations!
                  </Paragraph>
                </ContactUsContainer>
              </SidebarContainerLg>
            </Navbar>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SideBar
