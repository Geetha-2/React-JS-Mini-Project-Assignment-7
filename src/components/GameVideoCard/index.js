import ThemeContext from '../../context/ThemeContext'

import {
  NavLink,
  VideosListItem,
  ThumbnailImg,
  GamingTextContentContainer,
  Title,
  ViewCount,
} from './styledComponents'

const GameVideoCard = props => {
  const {videoDetails} = props
  const {id, thumbnailUrl, title, viewCount} = videoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <NavLink to={`/videos/${id}`}>
            <VideosListItem>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <GamingTextContentContainer>
                <Title isDarkTheme={isDarkTheme}>{title}</Title>
                <ViewCount>{viewCount} Watching Worldwide</ViewCount>
              </GamingTextContentContainer>
            </VideosListItem>
          </NavLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GameVideoCard
