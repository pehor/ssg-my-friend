import Link from 'next/link'

export default function Index () {
  return (
    <div>
      <p>Hello Next.js</p>
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
