import React from 'react'
import { render } from '@testing-library/react'
import Index from '../../src/pages/index'

describe('index', () => {
  let res
  beforeEach(() => {
    res = render(<Index/>)
  })

  test('renders welcome text', () => {
    expect(res.getByText(/Hello SSG!/)).toBeInTheDocument()
  })

  test('renders About page link', () => {
    expect(res.getByText('About Page')).toBeInTheDocument()
  })

  test('renders Static Posts link', () => {
    expect(res.getByText('Static Posts')).toBeInTheDocument()
  })
})
