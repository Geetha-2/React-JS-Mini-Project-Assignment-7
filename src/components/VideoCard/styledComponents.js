import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideosListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: none;
  margin-bottom: 20px;

  @media screen and (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 50px;
  }
`

export const ThumbnailImg = styled.img`
  width: 100%;
  height: 200px;
  margin-right: 10px;
  margin-bottom: 20px;

  @media screen and (min-width: 576px) {
    width: 40%;
    height: 250px;
  }
`

export const ProfileImgAndTextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;

  @media screen and (min-width: 576px) {
    width: 60%;
  }
`
export const ProfileImg = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50px;
  margin: 20px;
  margin-top: 0px;

  @media screen and (min-width: 576px) {
    display: none;
  }
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
  margin-top: -8px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  display: flex;
  color: #475569;
  margin-top: 0px;
  font-size: 15px;

  @media screen and (max-width: 576px) {
    display: none;
    font-size: 10px;
  }
`

export const ViewCount = styled.p`
  font-family: 'Roboto';
  color: #475569;
  margin-top: 0px;
  font-size: 12px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const ViewsAndDateContainer = styled.div`
  display: flex;
`

export const Dot = styled.p`
  color: #475569;
  margin-top: -8px;
  font-weight: bold;
  padding-right: 7px;
  padding-left: 7px;

  @media screen and (min-width: 768px) {
    margin-top: -6px;
  }
`
export const DateAndTime = styled.p`
  color: #475569;
  margin-top: -3px;
  font-size: 12px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    margin-top: -2px;
  }
`
export const ChannelNameSm = styled.p`
  display: none;
  @media screen and (max-width: 576px) {
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

  @media screen and (max-width: 576px) {
    display: flex;
  }
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
