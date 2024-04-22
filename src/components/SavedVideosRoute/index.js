import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import SideBar from '../SideBar'
import VideoCard from '../VideoCard'

import {
  SavedVideosContainer,
  SavedVideosIconAndNameCont,
  SavedVideosName,
  SavedVideoList,
  IconCont,
  NoSavedVideosContainer,
  NoSavedImg,
  NoSavedHeading,
  NoSavedPara,
  SavedContainer,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value

      return (
        <>
          <Header />
          <SavedContainer>
            <SideBar />
            <SavedVideosContainer
              data-testid="savedVideos"
              isDarkTheme={isDarkTheme}
            >
              <SavedVideosIconAndNameCont isDarkTheme={isDarkTheme}>
                <IconCont isDarkTheme={isDarkTheme}>
                  <HiFire size={35} color="#ff0b37" />
                </IconCont>
                <SavedVideosName isDarkTheme={isDarkTheme}>
                  Saved Videos
                </SavedVideosName>
              </SavedVideosIconAndNameCont>

              {savedVideos.length > 0 ? (
                <SavedVideoList>
                  {savedVideos.map(each => (
                    <VideoCard key={each.id} videoDetails={each} />
                  ))}
                </SavedVideoList>
              ) : (
                <NoSavedVideosContainer>
                  <NoSavedImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoSavedHeading isDarkTheme={isDarkTheme}>
                    No saved videos found
                  </NoSavedHeading>
                  <NoSavedPara isDarkTheme={isDarkTheme}>
                    You can save your videos while watching them
                  </NoSavedPara>
                </NoSavedVideosContainer>
              )}
            </SavedVideosContainer>
          </SavedContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
