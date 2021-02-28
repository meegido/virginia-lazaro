import {useContext, useEffect, useState} from 'react'
import * as ApiClient from '../../client/ApiClient'
import {Header} from '../../components/header/header.component'
import {Category} from '../../components/category/category.component'
import './category-page.styles.scss'
import {Context} from '../../LanguageProvider'

export const CategoryPage = ({categoryName}) => {
  const [state] = useContext(Context)
  const [loaded, setStatus] = useState(false)
  const [category, setCategory] = useState({})
  const {language} = state

  useEffect(() => {
    const loadCategories = async () => {
      const category = await ApiClient.fetchCategory(categoryName, language)
      setCategory(category)
      setStatus(true)
    }
    loadCategories()
  }, [categoryName, language])

  const isLoaded = loaded && category

  return (
    <div className="App">
      <Header />
      <main className="category-container">
        {isLoaded && <Category articles={category} name={`${categoryName}`} />}
      </main>
    </div>
  )
}
