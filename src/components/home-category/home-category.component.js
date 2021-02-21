import {Link} from '@reach/router'
import {HomeArticles} from '../home-articles/home-articles.component'
import './home-category.styles.scss'

export const HomeCategory = ({name, articles}) => (
  <section className={`category ${name}`}>
    <div className={`container-title ${name}`}>
      <h2 className={`category-title`}>{name}</h2>
      <Link to={`category/${name}`} className="category-more">Ver más</Link>
    </div>
    <div className={`row ${name}`}>
      {articles.map(article => {
        return (
          <HomeArticles
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
