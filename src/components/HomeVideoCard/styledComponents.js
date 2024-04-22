import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideosListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  background: none;

  @media screen and (min-width: 576px) {
    width: 250px;
    margin-right: 5px;
    margin-left: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 250px;
    margin-right: 20px;
  }
`

export const ThumbnailImg = styled.img`
  width: 100%;
`

export const ProfileImgAndTextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
export const ProfileImg = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50px;
  margin: 20px;
`
export const TitleAndTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : ' #0f0f0f')};
`

export const ChannelName = styled(Title)`
  display: flex;
  color: #475569;
  margin-top: 0px;
  font-size: 14px;

  @media screen and (max-width: 566px) {
    display: none;
    font-size: 10px;
  }
`

export const ViewCount = styled(Title)`
  color: #475569;
  margin-top: 0px;
  font-size: 12px;

  @media screen and (max-width: 566px) {
    font-size: 10px;
  }
`
export const ViewsAndDateContainer = styled.div`
  display: flex;
`

export const Dot = styled.p`
  color: #475569;
  margin-top: -7px;
  font-weight: bold;
  padding-right: 7px;
  padding-left: 7px;

  @media screen and (max-width: 566px) {
    margin-top: -10px;
  }
`
export const DateAndTime = styled(Title)`
  color: #475569;
  margin-top: 0px;
  font-size: 12px;

  @media screen and (max-width: 566px) {
    font-size: 10px;
  }
`
export const ChannelNameSm = styled.p`
  display: none;
  @media screen and (max-width: 566px) {
    display: flex;
    font-family: 'Roboto';
    font-size: 10px;
    font-weight: 500;
    color: #475569;
    margin-top: 0px;
    padding-right: 10px;
  }
`
export const DotSm = styled(Dot)`
  display: none;

  @media screen and (max-width: 566px) {
    display: flex;
  }
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
