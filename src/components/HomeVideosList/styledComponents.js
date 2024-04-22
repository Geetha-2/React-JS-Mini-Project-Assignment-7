import styled from 'styled-components'

export const HomeVideosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0px;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`
export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`

export const NoVideosImg = styled.img`
  height: 280px;
  width: 300px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    height: 220px;
    width: 220px;
  }
`
export const NoVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#1e293b')};
`

export const NoVideosText = styled.p`
  font-family: 'Roboto';
  font-size: 17px;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#475569')};
  text-align: center;
  margin-top: 0px;
`

export const RetryButton = styled.button`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: #ffffff;
  border-radius: 5px;
  background-color: #4f46e5;
  padding: 8px;
  border: none;
  width: 100px;
  height: 40px;
  cursor: pointer;
  outline: none;
`
