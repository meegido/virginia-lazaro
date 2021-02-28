import {useEffect, useState} from 'react'
import * as ApiClient from '../../client/ApiClient'
import {Header} from '../../components/header/header.component'
import {Category} from '../../components/category/category.component'
import './category-page.styles.scss'

export const CategoryPage = ({categoryName}) => {
  const [loaded, setStatus] = useState(false)
  const [category, setCategory] = useState({})

  useEffect(() => {
    const loadCategories = async () => {
      const category = await ApiClient.fetchCategory(categoryName)
      setCategory(category)
      setStatus(true)
    }
    loadCategories()
  },[])

  const isLoaded = loaded && category

  return (
    <div className="App">
      <Header />
      <main className="category-container">
        {isLoaded && (
          <Category articles={category} name={`${categoryName}`} />
        )}
      </main>
    </div>
  )
}
