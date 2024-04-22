import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {IoClose} from 'react-icons/io5'
import {IoIosSearch} from 'react-icons/io'

import Header from '../Header'
import SideBar from '../SideBar'
import HomeVideosList from '../HomeVideosList'
import FailureView from '../FailureView'

import {
  HomeContainer,
  HomeBgContainer,
  BannerBgContainer,
  WebsiteLogo,
  Para,
  Button,
  PrepaidPlansCont,
  LogoAndCloseIconCont,
  CloseButton,
  SearchContainer,
  SearchInput,
  SearchButton,
  LoaderContainer,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const APIStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'IN_PROGRESS',
}

class HomeRoute extends Component {
  state = {
    searchInput: '',
    apiStatus: APIStatusConstants.initial,
    homeVideos: [],
    bannerDisplay: 'flex',
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({
      apiStatus: APIStatusConstants.progress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const {searchInput} = this.state

    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(homeVideosApiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()

      const updatedData = fetchedData.videos.map(each => ({
        id: each.id,
        title: each.title,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
      }))

      this.setState({
        homeVideos: updatedData,
        apiStatus: APIStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: APIStatusConstants.failure,
      })
    }
  }

  onRetry = () => {
    this.setState(
      {
        searchInput: '',
      },
      this.getHomeVideos,
    )
  }

  renderSuccessView = () => {
    const {homeVideos} = this.state
    return <HomeVideosList homeVideos={homeVideos} onRetry={this.onRetry} />
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

  enterSearchInput = event => {
    if (event.key === 'Enter') {
      this.getHomeVideos()
    }
  }

  onClickSearchBtn = () => {
    this.getHomeVideos()
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onClickCloseBanner = () => {
    this.setState({
      bannerDisplay: 'none',
    })
  }

  render() {
    const {searchInput, bannerDisplay} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const display = bannerDisplay === 'flex' ? 'flex' : 'none'

          return (
            <>
              <Header />
              <HomeContainer>
                <SideBar />

                <HomeBgContainer isDarkTheme={isDarkTheme} data-testid="home">
                  <BannerBgContainer data-testid="banner" display={display}>
                    <LogoAndCloseIconCont>
                      <WebsiteLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <CloseButton
                        type="button"
                        data-testid="close"
                        onClick={this.onClickCloseBanner}
                      >
                        <IoClose size={25} color="#1e293b" />
                      </CloseButton>
                    </LogoAndCloseIconCont>

                    <PrepaidPlansCont>
                      <Para>Buy Nxt Watch Premium prepaid plans with UPI</Para>
                      <Button type="button">GET IT NOW</Button>
                    </PrepaidPlansCont>
                  </BannerBgContainer>

                  <SearchContainer isDarkTheme={isDarkTheme}>
                    <SearchInput
                      type="search"
                      value={searchInput}
                      placeholder="Search"
                      onChange={this.onChangeSearchInput}
                      onKeyDown={this.enterSearchInput}
                      isDarkTheme={isDarkTheme}
                    />
                    <SearchButton
                      type="button"
                      data-testid="searchButton"
                      isDarkTheme={isDarkTheme}
                      onClick={this.onClickSearchBtn}
                    >
                      <IoIosSearch size={20} color="#7e858e" />
                    </SearchButton>
                  </SearchContainer>

                  {this.renderApiStatus()}
                </HomeBgContainer>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default HomeRoute
