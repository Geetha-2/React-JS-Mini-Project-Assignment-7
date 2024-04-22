import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import {
  VideoItemDetailsContainer,
  VideoDetailsContainer,
  LoaderContainer,
} from './styledComponents'

import SideBar from '../SideBar'
import Header from '../Header'
import FailureView from '../FailureView'
import VideoItem from '../VideoItem'

import ThemeContext from '../../context/ThemeContext'

const APIStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: APIStatusConstants.initial,
    videoDetailsList: [],
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getFormattedData = data => ({
    id: data.video_details.id,
    title: data.video_details.title,
    videoUrl: data.video_details.video_url,
    channelName: data.video_details.channel.name,
    channelProfileImageUrl: data.video_details.channel.profile_image_url,
    channelSubscriberCount: data.video_details.channel.subscriber_count,
    viewCount: data.video_details.view_count,
    publishedAt: data.video_details.published_at,
    description: data.video_details.description,
    thumbnailUrl: data.video_details.thumbnail_url,
  })

  getVideoDetails = async () => {
    this.setState({
      apiStatus: APIStatusConstants.progress,
    })

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const VideoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(VideoItemDetailsApiUrl, options)

    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updatedData = this.getFormattedData(data)

      this.setState({
        videoDetailsList: updatedData,
        apiStatus: APIStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: APIStatusConstants.failure,
      })
    }
  }

  onRetry = () => {
    this.getVideoDetails()
  }

  clickLikedBtn = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: false,
    }))
  }

  clickDisLikedBtn = () => {
    this.setState(prevState => ({
      isDisLiked: !prevState.isDisLiked,
      isLiked: false,
    }))
  }

  renderSuccessView = () => {
    const {videoDetailsList, isLiked, isDisLiked} = this.state

    return (
      <VideoItem
        videoDetailsList={videoDetailsList}
        isLiked={isLiked}
        isDisLiked={isDisLiked}
        clickLikedBtn={this.clickLikedBtn}
        clickDisLikedBtn={this.clickDisLikedBtn}
        clickSavedBtn={this.clickSavedBtn}
      />
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
              <VideoItemDetailsContainer
                data-testid="videoItemDetails"
                isDarkTheme={isDarkTheme}
              >
                <SideBar />
                <VideoDetailsContainer>
                  {this.renderApiStatus()}
                </VideoDetailsContainer>
              </VideoItemDetailsContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
