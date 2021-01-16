import './Article.css'

function Article({
  title,
  image_url,
  publication_date,
  media_link,
  media_title,
}) {
  return (
    <div>
      <p>{title}</p>
      <p>{media_title}</p>
      <img src={image_url} alt="imagen" />
      <p>{publication_date}</p>
    </div>
  )
}

export default Article
