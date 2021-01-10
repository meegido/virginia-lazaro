import Header from '../../header/Header'
import {useEffect, useState} from 'react'
import * as ApiClient from '../../client/ApiClient'
import './Home.css'

function Home() {
  const [loaded, setStatus] = useState(false)
  const [categories, setCategories] = useState({
    culture: [],
  })

  useEffect(() => {
    ApiClient.fetchCategories().then(categories => {
      setCategories(categories)
      setStatus(true)
    })
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
          <article>
            <p>{article.title}</p>
            <img src={article.image_url} alt="imagen" />
          </article>
        )
      })}
    </div>
  )
}

export default Home