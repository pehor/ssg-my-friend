import React from 'react'
import { render } from '@testing-library/react'
import About from '../../pages/about'

describe('about', () => {
  let res
  beforeEach(() => {
    res = render(<About/>)
  })

  test('renders welcome test', () => {
    expect(res.getByText(/This is the about page/)).toBeInTheDocument()
  })
})
