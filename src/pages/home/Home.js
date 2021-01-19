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
      {isLoaded && (
        <div className="home">
          <HomeCategory articles={categories.culture} name="culture" />
          <HomeCategory articles={categories.interviews} name="interviews" />
          <HomeCategory articles={categories.pixels} name="pixels" />
        </div>
      )}
    </div>
  )
}

function HomeCategory({name, articles}) {
  return (
    <div className={`category ${name}`}>
      <h2>{name}</h2>
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
