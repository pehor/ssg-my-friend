import Link from 'next/link'
import MainContainer from '../layouts/mainContainer'

export default function Index () {
  return (
    <MainContainer>
      <h1>Hello SSG!</h1>
      <div style={{ height: 10 + 'em' }}></div>
      <div style={{ 'margin-top': '1em' }}>
        <Link href="/about">
          <a>About Page</a>
        </Link>
      </div>
      <div style={{ 'margin-top': '1em' }}>
        <Link href="/posts/0">
          <a>Static Posts</a>
        </Link>
      </div>
    </MainContainer>
  )
}
