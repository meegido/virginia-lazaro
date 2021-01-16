import Header from '../../header/Header'
import {useEffect, useState} from 'react'
import * as ApiClient from '../../client/ApiClient'
import Article from '../../article/Article'
import './Home.css'

function Home() {
  const [loaded, setStatus] = useState(false)
  const [categories, setCategories] = useState({
    culture: [],
  })

  useEffect(() => {
    const waitContent = async () => {
      await ApiClient.fetchCategories().then(categories => {
        setCategories(categories)
        setStatus(true)
      })
    }
    waitContent()
  }, [])

  const isLoaded = loaded && categories

  return (
    <div className="App">
      <Header />
      {isLoaded && <Category articles={categories.culture} name="culture" />}
      {isLoaded && (
        <Category articles={categories.interviews} name="interviews" />
      )}
      {isLoaded && <Category articles={categories.pixels} name="pixels" />}
    </div>
  )
}

function Category({name, articles}) {
  return (
    <div className={`category ${name}`}>
      <h3>{name}</h3>
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
  )
}

export default Home
