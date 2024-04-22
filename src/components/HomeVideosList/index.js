import {
  HomeVideosContainer,
  NoVideosView,
  NoVideosImg,
  NoVideosHeading,
  NoVideosText,
  RetryButton,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

import HomeVideoCard from '../HomeVideoCard'

const HomeVideosList = props => {
  const {homeVideos, onRetry} = props
  const videosCount = homeVideos.length

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return videosCount > 0 ? (
          <HomeVideosContainer>
            {homeVideos.map(eachVideo => (
              <HomeVideoCard videosList={eachVideo} key={eachVideo.id} />
            ))}
          </HomeVideosContainer>
        ) : (
          <NoVideosView>
            <NoVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading isDarkTheme={isDarkTheme}>
              No Search results found
            </NoVideosHeading>
            <NoVideosText isDarkTheme={isDarkTheme}>
              Try different key words or remove search filter
            </NoVideosText>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </NoVideosView>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default HomeVideosList
