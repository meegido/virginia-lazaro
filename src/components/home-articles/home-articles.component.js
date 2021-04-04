import {useRef} from 'react'
import './home-articles.styles.scss'

export const HomeArticles = ({
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
    <article className={`home-article ${name}`}>
      <h3 className="article-title">{title}</h3>
      <div className="article-info">
        <a className="media" href={media_link}>{media_title}</a>
      </div>
      <div className="article-content">
        <div className="image-container" onMouseEnter={handleApplyFilter}>
          <div
            ref={imageRef}
            className="article-image"
            style={{
              backgroundImage: 'url(' + image_url + ')',
            }}
            alt="article"
          ></div>
        </div>
        <div class="article-excerpt">
        <span className="date">{publication_date}</span>
        <span className="excerpt">{excerpt}</span>
        </div>
      </div>
    </article>
  )
}
