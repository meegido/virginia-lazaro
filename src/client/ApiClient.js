const ENDPOINT = 'https://virginialazaro.herokuapp.com'

export async function fetchCategories() {
  const path = `${ENDPOINT}/categories/`
  const response = await window.fetch(path)

  return await response.json()
}