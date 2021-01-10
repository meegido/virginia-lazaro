import {render, screen, act} from '@testing-library/react'
import App from '../../../App'
import * as ApiClient from '../../../client/ApiClient'

jest.mock('../../../client/ApiClient')

test('renders header', async () => {
  ApiClient.fetchCategories.mockResolvedValue({
    culture: [
      {
        title:
          'Estatuas ante el futuro: Colston, Milligan y Jane Reid en el Reino Unido',
      },
    ],
    interviews: [],
    pixels: [],
  })

  render(<App />)

  const title = screen.getByText('VIRGINIA LÁZARO')
  const culture = await screen.findByText('culture')
  const cultureArticleTitle = await screen.findByText(
    'Estatuas ante el futuro: Colston, Milligan y Jane Reid en el Reino Unido',
  )
  const interviews = await screen.findByText('interviews')
  const pixels = await screen.findByText('pixels')

  expect(title).toBeInTheDocument()
  expect(culture).toBeInTheDocument()
  expect(cultureArticleTitle).toBeInTheDocument()
  expect(interviews).toBeInTheDocument()
  expect(pixels).toBeInTheDocument()
})
