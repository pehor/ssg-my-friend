import Link from 'next/link'

export default function Index () {
  return (
    <div>
      <p>Hello SSG!</p>
      <div>
        <Link href="/about">
          <a>About Page</a>
        </Link>
      </div>
      <div>
        <Link href="/posts/1">
          <a>Static Posts</a>
        </Link>
      </div>
    </div>
  )
}
