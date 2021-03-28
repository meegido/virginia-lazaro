import {render, screen} from '@testing-library/react'
import {Home} from '../home.page'
import * as ApiClient from '../../../client/ApiClient'

jest.mock('../../../client/ApiClient')

xtest('Home renders articles information', async () => {
  ApiClient.fetchCategories.mockResolvedValue({
    culture: [
      {
        title:
          'Estatuas ante el futuro: Colston, Milligan y Jane Reid en el Reino Unido',
        media_title: "Terremoto",
        media_link: 'https://terremoto.mx/revista/surviving-through-smuggling/'
      },
    ],
    interviews: [],
    pixels: [],
  })

  render(<Home />)

  const title = screen.getByText('VIRGINIA LÁZARO')
  const culture = await screen.findByText('culture')
  const cultureArticleTitle = await screen.findByText(
    'Estatuas ante el futuro: Colston, Milligan y Jane Reid en el Reino Unido',
  )
  const interviews = await screen.findByText('interviews')
  const pixels = await screen.findByText('pixels')
  const mediaLink = await screen.findByText('Terremoto')
 

  expect(title).toBeInTheDocument()
  expect(culture).toBeInTheDocument()
  expect(cultureArticleTitle).toBeInTheDocument()
  expect(interviews).toBeInTheDocument()
  expect(pixels).toBeInTheDocument()
  expect(mediaLink).toBeInTheDocument()
  expect(mediaLink.href).toEqual('https://terremoto.mx/revista/surviving-through-smuggling/')
})
