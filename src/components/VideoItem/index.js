import ReactPlayer from 'react-player'

import {formatDistanceToNowStrict} from 'date-fns'

import {BiLike, BiDislike} from 'react-icons/bi'
import {RiMenuAddLine} from 'react-icons/ri'

import {
  VideoPlayerContainer,
  Title,
  ViewsAndDateContainer,
  ViewCount,
  Dot,
  DateAndTime,
  LikeAndDisLikeAndSavedContainer,
  LikeCont,
  DisLikeBtn,
  LikeBtn,
  LikeText,
  DisLikeText,
  SaveText,
  DisLikeCont,
  SaveCont,
  MenuBtn,
  HrLine,
  LogoAndTitleAndSubscribersCount,
  ProfileImg,
  ChannelName,
  ChannelNameAndSubscribersCount,
  SubscribersCount,
  Description,
  ViewsAndLikeBtnContainer,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const VideoItem = props => {
  const {
    isLiked,
    isDisLiked,
    videoDetailsList,
    clickLikedBtn,
    clickDisLikedBtn,
  } = props

  const onClickLike = () => {
    clickLikedBtn()
  }

  const onClickDisLike = () => {
    clickDisLikedBtn()
  }

  const {
    id,
    title,
    videoUrl,
    channelName,
    channelProfileImageUrl,
    channelSubscriberCount,
    viewCount,
    publishedAt,
    description,
  } = videoDetailsList

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, savedVideos} = value
        let isSaved

        const index = savedVideos.findIndex(each => each.id === id)

        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const saveBtnText = isSaved ? 'Saved' : 'Save'

        const onClickSave = () => {
          addVideo(videoDetailsList)
        }

        return (
          <VideoPlayerContainer data-testid="videoItemDetails">
            <ReactPlayer url={videoUrl} controls width="100%" />
            <Title isDarkTheme={isDarkTheme}>{title}</Title>
            <ViewsAndLikeBtnContainer>
              <ViewsAndDateContainer>
                <ViewCount>{viewCount} views</ViewCount>
                <Dot> . </Dot>
                <DateAndTime>
                  {formatDistanceToNowStrict(new Date(publishedAt))} ago
                </DateAndTime>
              </ViewsAndDateContainer>
              <LikeAndDisLikeAndSavedContainer>
                <LikeBtn
                  type="button"
                  color={isLiked ? '#2563eb' : '#64748b'}
                  onClick={onClickLike}
                >
                  <LikeCont>
                    <BiLike />
                    <LikeText isLiked={isLiked}>Like</LikeText>
                  </LikeCont>
                </LikeBtn>

                <DisLikeBtn
                  type="button"
                  color={isDisLiked ? '#2563eb' : '#64748b'}
                  onClick={onClickDisLike}
                >
                  <DisLikeCont>
                    <BiDislike />
                    <DisLikeText isDisLiked={isDisLiked}>Dislike</DisLikeText>
                  </DisLikeCont>
                </DisLikeBtn>

                <MenuBtn
                  type="button"
                  color={isSaved ? '#2563eb' : '#64748b'}
                  onClick={onClickSave}
                >
                  <SaveCont>
                    <RiMenuAddLine />
                    <SaveText isSaved={isSaved}>{saveBtnText}</SaveText>
                  </SaveCont>
                </MenuBtn>
              </LikeAndDisLikeAndSavedContainer>
            </ViewsAndLikeBtnContainer>
            <HrLine isDarkTheme={isDarkTheme} />
            <LogoAndTitleAndSubscribersCount>
              <ProfileImg src={channelProfileImageUrl} alt="channel logo" />
              <ChannelNameAndSubscribersCount>
                <ChannelName isDarkTheme={isDarkTheme}>
                  {channelName}
                </ChannelName>
                <SubscribersCount>
                  {channelSubscriberCount} subscribers
                </SubscribersCount>
              </ChannelNameAndSubscribersCount>
            </LogoAndTitleAndSubscribersCount>
            <Description isDarkTheme={isDarkTheme}>{description}</Description>
          </VideoPlayerContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItem
