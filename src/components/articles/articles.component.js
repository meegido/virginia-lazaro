import {useRef} from 'react'
import './articles.styles.scss'


export const ArticlesComponent = ({articles}) => {
  const imageRef = useRef(null)
  
  const handleApplyFilter = () => {
    const filters = ['contrast', 'blur', 'saturate', 'hue', 'invert']
    const filter = filters[Math.floor(Math.random() * filters.length)]
    imageRef.current.className = `article-image ${filter}`
  }

  return (
    <div className="articles">
      {articles.map(article => {
        return (
          <article key={article.title} className="article">
            <div className="article-header">
              <h2 className="article-category">{article.category}</h2>
              <a className="media" href={article.media_link}>{article.media_title}</a>
            </div>
            <div className="article-title">
              <h3 className="title">{article.title}</h3>
              <p className="date">{article.publication_date}</p>
            </div>
            <div className="article-content">
              <div className="image-container" onMouseEnter={handleApplyFilter}>
                <div
                  className="article-image"
                  ref={imageRef}
                  style={{
                    backgroundImage: 'url(' + article.image_url + ')',
                  }}
                  alt="article"
                ></div>
              </div>
              <p className="excerpt">{article.excerpt}</p>
            </div>
        </article>
        )
      })}
    </div>
  )
}
