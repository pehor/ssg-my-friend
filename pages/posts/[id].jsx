import Link from 'next/link'

const Post = props => {
  const { id, content } = props
  const nextPostLink = `/posts/${parseInt(id) + 1}`
  return (
    <div>
      <p>Post: {id}</p>
      <p>Content: {content}</p>
      <Link href={nextPostLink}>
        <a>Next post -{'>'}</a>
      </Link>
    </div>
  )
}

Post.getInitialProps = function (context) {
  const { id, content } = context.query
  return { id, content }
}

export default Post
