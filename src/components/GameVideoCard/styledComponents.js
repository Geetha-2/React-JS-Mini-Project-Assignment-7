import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideosListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: none;
  margin-bottom: 20px;

  @media screen and (min-width: 576px) {
    width: 210px;
    margin-right: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 260px;
    margin-right: 10px;
  }
`
export const ThumbnailImg = styled.img`
  width: 100%;
  height: 300px;
  align-self: center;

  @media screen and (min-width: 768px) {
    width: 230px;
    height: 320px;
  }
`

export const GamingTextContentContainer = styled.div`
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
  margin-bottom: 0px;
`

export const ViewCount = styled.p`
  font-family: 'Roboto';
  color: #475569;
  margin-top: 5px;
  font-size: 12px;
  font-weight: 500;

  @media screen and (min-width: 576px) {
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const NavLink = styled(Link)`
  text-decoration: none;
`
