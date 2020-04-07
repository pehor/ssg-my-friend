import Link from 'next/link'
import MainContainer from '../layouts/mainContainer'

export default function Index () {
  return (
    <MainContainer>
      <h1>Hello SSG!</h1>
      <div style={{ height: '10em' }}></div>
      <div style={{ marginTop: '1em' }}>
        <Link href="/about">
          <a>About Page</a>
        </Link>
      </div>
      <div style={{ marginTop: '1em' }}>
        <Link href="/posts/0">
          <a>Static Posts</a>
        </Link>
      </div>
    </MainContainer>
  )
}
