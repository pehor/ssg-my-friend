import Link from 'next/link'
import MainContainer from '../layouts/mainContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import styles from './index.module.scss'

export default function Index () {
  return (
    <MainContainer>
      <h1>Hello SSG!</h1>
      <div style={{ height: '10em' }}></div>
      <div>
        <FontAwesomeIcon icon={ faQuoteLeft } style={{ verticalAlign: 'super' }}/>
        <span className = { styles.quoted }> Look how easy it is to create a static site! </span>
        <FontAwesomeIcon icon={ faQuoteRight } style={{ verticalAlign: 'sub' }}/>
      </div>
      <div className={styles.quoteAuthor} style={{ float: 'right' }}>
      - Unknown author
      </div>
      <div style={{ height: '10em' }}></div>
      <div style={{ marginTop: '1em' }}>
        <Link href="/about">
          <a>About Page <FontAwesomeIcon icon={ faAngleDoubleRight }/></a>
        </Link>
      </div>
      <div style={{ marginTop: '1em' }}>
        <Link href="/posts/0">
          <a>Static Posts <FontAwesomeIcon icon={ faAngleDoubleRight }/></a>
        </Link>
      </div>
    </MainContainer>
  )
}
