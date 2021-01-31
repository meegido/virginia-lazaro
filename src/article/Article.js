import './Article.css'

function Article({
  title,
  image_url,
  publication_date,
  media_link,
  media_title,
  excerpt,
  name,
}) {
  const handleApplyFilter = (event) => {
    event.target.className = 'article-image brightness'
  }

  const hangleRemoveFilter = (event) => {
    event.target.className = 'article-image'
  }

  return (
    <div className={`article ${name}`}>
      <h3 className="article-title">{title}</h3>
      <div className="article-info">
        <a href={media_link}>{media_title}</a>
        <p>{publication_date}</p>
      </div>
      <div className="image-container" onMouseEnter={handleApplyFilter} onMouseLeave={hangleRemoveFilter}>
        <div
          className="article-image"
          style={{
            backgroundImage: 'url(' + image_url + ')',
          }}
          alt="article"
        ></div>
      </div>
      <p className="excerpt">{excerpt}</p>
    </div>
  )
}

export default Article
