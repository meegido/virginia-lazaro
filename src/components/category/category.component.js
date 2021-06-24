import {CategoryArticles} from '../category-articles/category-articles.component'
import './category.styles.scss'

export const Category = ({articles, name}) => (
  <section className={`category ${name}`}>
    <div className="container-titles">
      <h2 className={`category-titles`}>{name}</h2>
    </div>
    <div className={`container ${name}`}>
      {articles.map(article => {
        return (
          <CategoryArticles
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
