import React, { Component } from 'react'
import './mainContainer.module.scss'

class MainContainer extends Component {
  render () {
    const { children } = this.props
    return (
      <div className={'container'}>
        <div className={'container-centered'}>
          { children }
        </div>
      </div>
    )
  }
}

export default MainContainer
