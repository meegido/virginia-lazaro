import {useEffect, useState, useContext} from 'react'
import * as ApiClient from '../../client/ApiClient'
import {Header} from '../../components/header/header.component'
import {HomeCategory} from '../../components/home-category/home-category.component'
import {Footer} from '../../components/footer/footer.component'
import './home.styles.scss'
import {Context} from '../../LanguageProvider'

export const Home = () => {
  const [state] = useContext(Context)
  const [loaded, setStatus] = useState(false)
  const [categories, setCategories] = useState({})
  const {language} = state

  useEffect(() => {
    const loadCategories = async () => {
      const categories = await ApiClient.fetchCategories(language)
      setCategories(categories)
      setStatus(true)
    }
    loadCategories(language)
  }, [language])

  const isLoaded = loaded && categories

  return (
    <div className="App">
      <Header />
      <main className="home-container">
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
      <Footer />
    </div>
  )
}
