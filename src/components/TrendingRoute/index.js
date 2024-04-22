import {Component} from 'react'

import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'

import Loader from 'react-loader-spinner'

import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import VideoCard from '../VideoCard'

import {
  TrendingVideosContainer,
  TrendingVideosIconAndNameCont,
  IconCont,
  TrendingVideosName,
  LoaderContainer,
  TrendingVideosList,
  TrendingContainer,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const APIStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'IN_PROGRESS',
}

class TrendingRoute extends Component {
  state = {
    apiStatus: APIStatusConstants.initial,
    trendingVideosList: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({
      apiStatus: APIStatusConstants.progress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const trendingVideosApiUrl = `https://apis.ccbp.in/videos/trending`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(trendingVideosApiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()

      const updatedData = fetchedData.videos.map(each => ({
        id: each.id,
        title: each.title,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        channelName: each.channel.name,
        channelProfileImageUrl: each.channel.profile_image_url,
      }))

      this.setState({
        trendingVideosList: updatedData,
        apiStatus: APIStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: APIStatusConstants.failure,
      })
    }
  }

  onRetry = () => {
    this.getTrendingVideos()
  }

  renderSuccessView = () => {
    const {trendingVideosList} = this.state
    return (
      <TrendingVideosList>
        {trendingVideosList.map(each => (
          <VideoCard key={each.id} videoDetails={each} />
        ))}
      </TrendingVideosList>
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
              <TrendingContainer>
                <SideBar />
                <TrendingVideosContainer
                  isDarkTheme={isDarkTheme}
                  data-testid="trending"
                >
                  <TrendingVideosIconAndNameCont isDarkTheme={isDarkTheme}>
                    <IconCont isDarkTheme={isDarkTheme}>
                      <HiFire size={35} color="#ff0b37" />
                    </IconCont>
                    <TrendingVideosName isDarkTheme={isDarkTheme}>
                      Trending
                    </TrendingVideosName>
                  </TrendingVideosIconAndNameCont>
                  {this.renderApiStatus()}
                </TrendingVideosContainer>
              </TrendingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default TrendingRoute
