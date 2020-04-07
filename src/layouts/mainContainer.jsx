import React, { Component } from 'react'
import styles from './mainContainer.module.scss'

class MainContainer extends Component {
  render () {
    const { children } = this.props
    return (
      <div className={ styles.container}>
        <div className={ styles['container-centered'] }>
          { children }
        </div>
      </div>
    )
  }
}

export default MainContainer
