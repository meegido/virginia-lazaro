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
  return (
    <div className={`article ${name}`}>
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
      <p className="excerpt">{excerpt}</p>
    </div>
  )
}

export default Article
