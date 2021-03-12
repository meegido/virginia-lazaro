const ENDPOINT = 'https://virginialazaro.herokuapp.com'

export async function fetchCategories(language) {
  const path = `${ENDPOINT}/categories/`
  const response = await window.fetch(path, {
    headers: {
      'X-Language': language,
    },
  })

  return await response.json()
}

export async function fetchCategory(categoryName, language) {
  const path = `${ENDPOINT}/categories/${categoryName}/`
  const response = await window.fetch(path, {
    headers: {
      'X-Language': language,
    },
  })

  return await response.json()
}

export async function fetchArticles(language) {
  const path = `${ENDPOINT}/articles`

  const response = await window.fetch(path, {
    headers: {
      'X-Language': language,
    },
  })

  return await response.json()
}
