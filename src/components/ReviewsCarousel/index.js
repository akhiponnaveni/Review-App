// Write your code here

import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {active: 0}

  rightArrow = () => {
    const {active} = this.state
    const {reviewsList} = this.props

    if (active < reviewsList.length - 1) {
      this.setState(prevState => ({active: prevState.active + 1}))
    }
  }

  leftArrow = () => {
    const {active} = this.state
    const {reviewsList} = this.props

    if (active > 0) {
      this.setState(prevState => ({
        active: prevState.active - 1,
      }))
    }
  }

  showTheReview = review => {
    const {username, imgUrl, companyName, description} = review
    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} className="review-image" />
        <p className="name">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {active} = this.state
    const {reviewsList} = this.props
    const currentReviewDetails = reviewsList[active]

    return (
      <div className="app-container">
        <h1 className="heading">reviews</h1>
        <div className="bottom-img-container">
          <button
            type="button"
            className="Button"
            data-testid="leftArrow"
            onClick={this.leftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          {this.showTheReview(currentReviewDetails)}

          <button
            type="button"
            className="Button"
            onClick={this.rightArrow}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
