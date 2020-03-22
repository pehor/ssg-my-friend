import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Post () {
  const router = useRouter()
  const { pid } = router.query
  const nextPostLink = `/posts/${pid + 1}`
  return (
    <div>
      <p>Post: {pid}</p>
      <Link href={nextPostLink}>
        <a>Next post -{'>'}</a>
      </Link>
    </div>
  )
}
