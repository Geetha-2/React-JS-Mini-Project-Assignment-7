import styled from 'styled-components'

export const VideoPlayerContainer = styled.div`
  padding: 60px;
  padding-left: 0px;
  padding-right: 0px;
  margin: 30px;
  margin-left: 0px;
  margin-right: 0px;

  @media screen and (min-width: 768px) {
    margin: 40px;
  }
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  line-height: 1.5;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
  padding-left: 20px;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding-left: 0px;
  }
`

export const ViewsAndLikeBtnContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const ViewsAndDateContainer = styled.div`
  display: flex;
`

export const ViewCount = styled(Title)`
  color: #64748b;
  margin-top: 0px;
  font-size: 13px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`
export const Dot = styled.p`
  color: #64748b;
  margin-top: -12px;
  font-weight: bold;
  padding-left: 13px;
  font-size: 25px;

  @media screen and (min-width: 768px) {
    margin-top: -10px;
    font-size: 20px;
  }
`
export const DateAndTime = styled(Title)`
  color: #64748b;
  margin-top: 0px;
  font-size: 13px;
  padding-left: 13px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`
export const LikeAndDisLikeAndSavedContainer = styled.div`
  display: flex;
  padding-left: 13px;
`
export const LikeCont = styled.div`
  display: flex;
  margin-right: 10px;
`

export const LikeBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 27px;
  color: ${props => props.color};
  cursor: pointer;
  outline: none;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const DisLikeBtn = styled(LikeBtn)``

export const MenuBtn = styled(LikeBtn)`
  font-size: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const LikeText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.isLiked ? '#3b82f6' : '#64748b')};
  margin-top: 0px;
  padding-left: 10px;

  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`
export const DisLikeText = styled(LikeText)`
  color: ${props => (props.isDisLiked ? '#3b82f6' : '#64748b')};
`
export const SaveText = styled(LikeText)`
  color: ${props => (props.isSaved ? '#3b82f6' : '#64748b')};
`

export const DisLikeCont = styled(LikeCont)``

export const SaveCont = styled(LikeCont)``

export const HrLine = styled.hr`
  width: 95%;
  border: 1px solid ${props => (props.isDarkTheme ? '#64748b' : '#cccccc')};
  margin-left: 13px;
`

export const LogoAndTitleAndSubscribersCount = styled.div`
  display: flex;
`

export const ProfileImg = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50px;
  margin: 20px;

  @media screen and (min-width: 768px) {
    height: 45px;
    width: 45px;
  }
`

export const ChannelNameAndSubscribersCount = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 22px;
`

export const ChannelName = styled(Title)`
  display: flex;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  font-weight: 500;
  margin-top: 0px;
  font-size: 14px;

  @media screen and (max-width: 567px) {
    display: none;
    font-size: 10px;
  }
`
export const SubscribersCount = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #64748b;
  margin-top: -5px;
  padding-left: 20px;

  @media screen and (min-width: 768px) {
    padding-left: 0px;
    font-size: 11px;
  }
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  line-height: 1.5;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#475569')};
  padding-left: 30px;

  @media screen and (min-width: 768px) {
    padding-left: 85px;
    font-size: 12px;
  }
`
