import {useRef} from 'react'
import './category-articles.styles.scss'

export const CategoryArticles = ({
  title,
  image_url,
  publication_date,
  media_link,
  media_title,
  excerpt,
  name,
}) => {
  const imageRef = useRef(null)
  
  const handleApplyFilter = () => {
    const filters = ['contrast', 'blur', 'saturate', 'hue', 'invert']
    const filter = filters[Math.floor(Math.random() * filters.length)]
    imageRef.current.className = `article-image ${filter}`
  }

  return (
    <article className={`category-article ${name}`}>
      <h3 className="article-title">{title}</h3>
      <div className="article-info">
        <a className="media" href={media_link}>{media_title}</a>
      </div>
      <div className="article-content">
        <div className="image-container">
          <div
            onMouseEnter={handleApplyFilter}
            ref={imageRef}
            className="article-image"
            style={{
              backgroundImage: 'url(' + image_url + ')',
            }}
            alt="article"
          />
        </div>
        <div className="article-excerpt">
          <span className="date">{publication_date}</span>
          <span className="excerpt">{excerpt}</span>
        </div>
      </div>
    </article>
  )
}
