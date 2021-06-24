import './articles.styles.scss'
import {navigate} from '@reach/router'

export const ArticlesComponent = ({articles}) => {
  const handleApplyFilter = event => {
    const filters = ['contrast', 'blur', 'saturate', 'hue', 'invert']
    const filter = filters[Math.floor(Math.random() * filters.length)]

    event.target.className = `article-image ${filter}`
  }

  return (
    <div className="articles">
      {articles.map((article, index) => {
        return (
          <article key={article.title} className="article">
            <div className="article-header">
              <h2 className="article-category">{article.category}</h2>
              <p className="category-more"  
                onClick={async event => {
                  navigate(`/category/${article.category}`)
                }}>Ver más</p>
            </div>
            <div className="article-title">
              <h3 className="title">{article.title}</h3>
              <a className="media" href={article.media_link}>
                {article.media_title}
              </a>
            </div>
            <div className="article-content">
              <div className="image-container">
                <div
                  className="article-image"
                  onMouseEnter={handleApplyFilter}
                  style={{
                    backgroundImage: 'url(' + article.image_url + ')',
                  }}
                  alt="article"
                />
              </div>
              <div className="article-excerpt">
                <span className="date">{article.publication_date}</span>
                <span className="excerpt">{article.excerpt}</span>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
