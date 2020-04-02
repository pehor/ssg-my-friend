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
        <Link href="/posts/0">
          <a>Static Posts</a>
        </Link>
      </div>
    </div>
  )
}
