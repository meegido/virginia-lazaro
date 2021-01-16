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
    <div>
      <p>{title}</p>
      <a href={media_link}>{media_title}</a>
      <img src={image_url} alt="article" />
      <p>{publication_date}</p>
      <p>{excerpt}</p>
    </div>
  )
}

export default Article
