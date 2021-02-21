import {Article} from '../article/article.component'
import './home-category.styles.scss'

export const HomeCategory = ({name, articles}) => (
  <section className={`category ${name}`}>
    <div className={`container-title ${name}`}>
      <h2 className={`category-title`}>{name}</h2>
      <a href="/" className="category-more">Ver más</a>
    </div>
    <div className={`row ${name}`}>
      {articles.map(article => {
        return (
          <Article
            name={name}
            key={article.title}
            title={article.title}
            image_url={article.image_url}
            excerpt={article.excerpt}
            publication_date={article.publication_date}
            media_title={article.media_title}
            media_link={article.media_link}
          />
        )
      })}
    </div>
  </section>
)
