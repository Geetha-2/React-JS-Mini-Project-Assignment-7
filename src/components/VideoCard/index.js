import {formatDistanceToNowStrict} from 'date-fns'

import {
  VideosListItem,
  ThumbnailImg,
  ProfileImgAndTextContainer,
  ProfileImg,
  TitleAndTextContainer,
  Title,
  ChannelName,
  ViewCount,
  ViewsAndDateContainer,
  Dot,
  DateAndTime,
  ChannelNameSm,
  DotSm,
  NavLink,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    channelName,
    channelProfileImageUrl,
    viewCount,
    publishedAt,
  } = videoDetails
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <NavLink to={`/videos/${id}`}>
            <VideosListItem>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <ProfileImgAndTextContainer>
                <ProfileImg src={channelProfileImageUrl} alt="channel logo" />
                <TitleAndTextContainer>
                  <Title isDarkTheme={isDarkTheme}>{title}</Title>

                  <ChannelName>{channelName}</ChannelName>
                  <ViewsAndDateContainer>
                    <ChannelNameSm>{channelName}</ChannelNameSm>
                    <DotSm> . </DotSm>
                    <ViewCount>{viewCount} views</ViewCount>
                    <Dot> . </Dot>
                    <DateAndTime>
                      {formatDistanceToNowStrict(new Date(publishedAt))} ago
                    </DateAndTime>
                  </ViewsAndDateContainer>
                </TitleAndTextContainer>
              </ProfileImgAndTextContainer>
            </VideosListItem>
          </NavLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoCard
