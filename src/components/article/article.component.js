import '../assets/posterize.svg'
import './article.styles.css'

export const Article = ({
  title,
  image_url,
  publication_date,
  media_link,
  media_title,
  excerpt,
  name,
}) => {
  const handleApplyFilter = (event) => {
    const filters = ['contrast', 'blur', 'saturate', 'hue', 'invert', 'posterize']
    const filter = filters[Math.floor(Math.random() * filters.length)]

    event.target.className = `article-image ${filter}`
  }

  return (
    <article className={`article ${name}`}>
      <h3 className="article-title">{title}</h3>
      <div className="article-info">
        <a className="media" href={media_link}>{media_title}</a>
        <p className="date">{publication_date}</p>
      </div>
      <div className="article-content">
        <div className="image-container" onMouseEnter={handleApplyFilter}>
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
    </article>
  )
}
