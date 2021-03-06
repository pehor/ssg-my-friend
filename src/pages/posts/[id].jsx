import Link from 'next/link'
import dummyList from '../../../dummyData/dummyList'
import MainContainer from '../../layouts/mainContainer'
import styles from './[id].module.scss'

const Post = props => {
  const { id, content } = props
  const nextPostNumber = (parseInt(id) + 1) % 3 // there are 3 items in the mock data
  const nextPostLink = `/posts/${nextPostNumber}`
  return (
    <MainContainer>
      <div className={ styles.post }>
        <h2 className={ styles.postId }>Post: {id}</h2>
        <p className={ styles.postContent }>{content}</p>
        <Link href={nextPostLink}>
          <a>Next post -{'>'}</a>
        </Link>
      </div>
    </MainContainer>
  )
}

// This function generates data for the page at build time
export async function getStaticProps (context) {
  const { id } = context.params
  const postData = dummyList.find(dummy => dummy.id === id)
  return {
    props: {
      id,
      content: postData.content
    }
  }
}

// this page will get autogenerated for each of the params in the list we define here
export async function getStaticPaths () {
  // get list of content from cms
  return {
    paths: dummyList.map((dummy) => {
      return {
        params: {
          id: dummy.id
        }
      }
    }),
    fallback: false
  }
}

export default Post
