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

const HomeVideoCard = props => {
  const {videosList} = props
  const {id, title, publishedAt, thumbnailUrl, viewCount, channel} = videosList

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <NavLink to={`/videos/${id}`}>
            <VideosListItem>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <ProfileImgAndTextContainer>
                <ProfileImg src={channel.profileImageUrl} alt="channel logo" />
                <TitleAndTextContainer>
                  <Title isDarkTheme={isDarkTheme}>{title}</Title>
                  <ChannelName>{channel.name}</ChannelName>
                  <ViewsAndDateContainer>
                    <ChannelNameSm>{channel.name}</ChannelNameSm>
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

export default HomeVideoCard
