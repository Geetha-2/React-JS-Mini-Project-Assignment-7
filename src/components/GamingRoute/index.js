import {Component} from 'react'

import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'

import Loader from 'react-loader-spinner'

import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import GameVideoCard from '../GameVideoCard'

import {
  GamingVideosContainer,
  GamingVideosIconAndNameCont,
  IconCont,
  GamingVideosName,
  LoaderContainer,
  GamingVideosList,
  GamingContainer,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const APIStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'IN_PROGRESS',
}

class GamingRoute extends Component {
  state = {
    apiStatus: APIStatusConstants.initial,
    gamingVideosList: [],
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({
      apiStatus: APIStatusConstants.progress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const gamingVideosApiUrl = `https://apis.ccbp.in/videos/gaming`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(gamingVideosApiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const updatedData = fetchedData.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      console.log(updatedData)

      this.setState({
        gamingVideosList: updatedData,
        apiStatus: APIStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: APIStatusConstants.failure,
      })
    }
  }

  onRetry = () => {
    this.getGamingVideos()
  }

  renderSuccessView = () => {
    const {gamingVideosList} = this.state
    return (
      <GamingVideosList>
        {gamingVideosList.map(each => (
          <GameVideoCard key={each.id} videoDetails={each} />
        ))}
      </GamingVideosList>
    )
  }

  renderInProgressView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case APIStatusConstants.progress:
        return this.renderInProgressView()
      case APIStatusConstants.success:
        return this.renderSuccessView()
      case APIStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <GamingContainer>
                <SideBar />
                <GamingVideosContainer
                  isDarkTheme={isDarkTheme}
                  data-testid="gaming"
                >
                  <GamingVideosIconAndNameCont isDarkTheme={isDarkTheme}>
                    <IconCont isDarkTheme={isDarkTheme}>
                      <HiFire size={35} color="#ff0b37" />
                    </IconCont>
                    <GamingVideosName isDarkTheme={isDarkTheme}>
                      Gaming
                    </GamingVideosName>
                  </GamingVideosIconAndNameCont>
                  {this.renderApiStatus()}
                </GamingVideosContainer>
              </GamingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default GamingRoute
