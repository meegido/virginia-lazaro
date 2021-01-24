import './Article.css'

function Article({
  title,
  image_url,
  publication_date,
  media_link,
  media_title,
  excerpt,
}) {
  return (
    <div className="article">
      <h3 className="article-title">{title}</h3>
      <div className="article-info">
        <a href={media_link}>{media_title}</a>
        <p>{publication_date}</p>
      </div>
      <div className="image-container">
        <div
          className="article-image"
          style={{
            backgroundImage: 'url(' + image_url + ')',
          }}
          alt="article"
        ></div>
      </div>
      <p class="excerpt">{excerpt}</p>
    </div>
  )
}

export default Article
