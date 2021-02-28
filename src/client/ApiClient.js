const ENDPOINT = 'https://virginialazaro.herokuapp.com'

const myHeaders = new Headers({
  'X-Language': sessionStorage.getItem('language'),
})

export async function fetchCategories() {
  const path = `${ENDPOINT}/categories/`
  const response = await window.fetch(path, {
    headers: {
      'X-Language': sessionStorage.getItem('language'),
    },
  })

  return await response.json()
}

export async function fetchCategory(categoryName) {
  const path = `${ENDPOINT}/categories/${categoryName}/`
  const response = await window.fetch(path, {
    headers: {
      'X-Language': sessionStorage.getItem('language'),
    },
  })

  return await response.json()
}
