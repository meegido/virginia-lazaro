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
      <img className="image" src={image_url} alt="article" />
      <p class="excerpt">{excerpt}</p>
    </div>
  )
}

export default Article
