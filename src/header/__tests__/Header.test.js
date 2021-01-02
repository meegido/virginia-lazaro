import {render, screen} from '@testing-library/react'
import App from '../../App'

test('renders header', () => {
  render(<App />)
  const title = screen.getByText('VIRGINIA LÁZARO')
  expect(title).toBeInTheDocument()
})
