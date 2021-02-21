import {useEffect, useState} from 'react'
import * as ApiClient from '../../client/ApiClient'
import {Header} from '../../components/header/header.component'
import {HomeCategory} from '../../components/home-category/home-category.component'
import './home.styles.scss'

export const Home = () => {
  const [loaded, setStatus] = useState(false)
  const [categories, setCategories] = useState({})

  useEffect(() => {
    const loadCategories = async () => {
      const categories = await ApiClient.fetchCategories()
      setCategories(categories)
      setStatus(true)
    }
    loadCategories()
  }, [])

  const isLoaded = loaded && categories

  return (
    <div className="App">
      <Header />
      <main className="home">
        {isLoaded && (
          <HomeCategory articles={categories.pixels} name="pixels" />
        )}
        {isLoaded && (
          <HomeCategory articles={categories.culture} name="culture" />
        )}
        {isLoaded && (
          <HomeCategory articles={categories.interviews} name="interviews" />
        )}
      </main>
    </div>
  )
}
