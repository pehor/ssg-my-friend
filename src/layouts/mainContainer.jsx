import React, { Component } from 'react'
import Logo from '../components/logo'
import styles from './mainContainer.module.scss'

class MainContainer extends Component {
  render () {
    const { children } = this.props
    return (
      <div className={ styles.container }>
        <div className={ styles.pageHeader }>
          <Logo/>
        </div>
        <div className={ styles.containerCentered }>
          { children }
        </div>
      </div>
    )
  }
}

export default MainContainer
