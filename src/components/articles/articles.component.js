
export const ArticlesComponent = ({articles}) => {
  const handleApplyFilter = (event) => {
    const filters = ['contrast', 'blur', 'saturate', 'hue', 'invert']
    const filter = filters[Math.floor(Math.random() * filters.length)]

    event.target.className = `article-image ${filter}`
  }

  return (
    <div>
      {articles.map(article => {
        return (
          <article key={article.title}>
            <h2>{article.category}</h2>
            <h3 className="article-title">{article.title}</h3>
            <div className="article-info">
              <a className="media" href={article.media_link}>{article.media_title}</a>
              <p className="date">{article.publication_date}</p>
            </div>
            <div className="article-content">
              <div className="image-container" onMouseEnter={handleApplyFilter}>
                <div
                  className="article-image"
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
