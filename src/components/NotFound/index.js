import Header from '../Header'
import SideBar from '../SideBar'

import ThemeContext from '../../context/ThemeContext'

import {
  NotFoundContainer,
  NotFoundCont,
  NotFoundImg,
  NotFoundHeading,
  NotFoundText,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <NotFoundContainer>
            <SideBar />
            <NotFoundCont isDarkTheme={isDarkTheme}>
              <NotFoundImg src={notFoundImg} alt="not found" />
              <NotFoundHeading isDarkTheme={isDarkTheme}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundText isDarkTheme={isDarkTheme}>
                We are sorry, the page you requested could not be found.
              </NotFoundText>
            </NotFoundCont>
          </NotFoundContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
