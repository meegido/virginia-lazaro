import Header from '../../header/Header'
import {useEffect, useState} from 'react'
import * as ApiClient from '../../client/ApiClient'
import Article from '../../article/Article'
import './Home.css'

function Home() {
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
      <div className="home">
        {isLoaded && (
          <HomeCategory articles={categories.pixels} name="pixels" />
        )}
        {isLoaded && (
          <HomeCategory articles={categories.culture} name="culture" />
        )}
        {isLoaded && (
          <HomeCategory articles={categories.interviews} name="interviews" />
        )}
      </div>
    </div>
  )
}

function HomeCategory({name, articles}) {
  return (
    <div className={`category ${name}`}>
      <h2 className={`category-title ${name}`}>{name}</h2>
      <div className="row">
        {articles.map(article => {
          return (
            <Article
              key={article.title}
              title={article.title}
              image_url={article.image_url}
              excerpt={article.excerpt}
              publication_date={article.publication_date}
              media_title={article.media_title}
              media_link={article.media_link}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Home
