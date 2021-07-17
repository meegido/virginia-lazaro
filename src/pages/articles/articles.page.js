import {useContext, useEffect, useState} from 'react'
import * as ApiClient from '../../client/ApiClient'
import {Context} from '../../LanguageProvider'
import {Header} from '../../components/header/header.component'
import {Footer} from '../../components/footer/footer.component'
import {ArticlesComponent} from '../../components/articles/articles.component'
import './articles-page.styles.scss'

export const Articles = () => {
  const [state] = useContext(Context)
  const [loaded, setStatus] = useState(false)
  const [articles, setArticles] = useState(false)
  const {language} = state

  useEffect(() => {
    const loadArticles = async () => {
      const articles = await ApiClient.fetchArticles(language)
      setArticles(articles)
      setStatus(true)
    }
    loadArticles()
  }, [language])

  const isLoaded = loaded && articles

  return (
    <div className="App">
      <Header />
      <main className="articles-container">
        {isLoaded && 
        <div>
         <ArticlesComponent articles={articles} />
        </div>}
      </main>
      <Footer />
    </div>
  )
}
