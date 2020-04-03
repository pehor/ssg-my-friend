import React from 'react'
import { render } from '@testing-library/react'

// eslint-disable-next-line import/no-duplicates
import Post from '../../../pages/posts/[id]'
// eslint-disable-next-line import/no-duplicates
import { getStaticProps, getStaticPaths } from '../../../pages/posts/[id]'

describe('post', () => {
  describe('rendering', () => {
    let res
    beforeEach(() => {
      res = render(<Post id='2' content='My post'/>)
    })

    test('renders post number', () => {
      expect(res.getByText(/Post: 2/)).toBeInTheDocument()
    })

    test('renders post conent', () => {
      expect(res.getByText(/Content: My post/)).toBeInTheDocument()
    })

    test('renders next post link', () => {
      expect(res.getByText(/Next post ->/)).toBeInTheDocument()
    })
  })

  describe('getStaticProps', () => {
    it('returns the correct props', async () => {
      expect(await getStaticProps({
        params: { id: '1' }
      })).toStrictEqual({
        props: {
          id: '1',
          content: 'Post 1'
        }
      })
    })
  })

  describe('getStaticPaths', () => {
    it('returns the correct paths', async () => {
      expect(await getStaticPaths()).toStrictEqual({
        paths: [
          { params: { id: '0' } },
          { params: { id: '1' } },
          { params: { id: '2' } }
        ],
        fallback: false
      })
    })
  })
})
