import {Link} from '@reach/router'
import './header.styles.css'

const Header = () => {
  return (
    <header className="main-header">
      <nav className="nav">
        <ul>
          <li>
            <Link to="about">ABOUT</Link>
          </li>
          <li>
            <Link to="articles">ARTICLES</Link>
          </li>
          <li>
            <Link to="projects">PROJECTS</Link>
          </li>
          <li>
            <Link to="idioma">ES/EN</Link>
          </li>
        </ul>
      </nav>
      <div className="name">
        <div className="subtitle">
          <span>Crítica</span>
          <span>cultural</span>
        </div>
        <h1 className="title">VIRGINIA LÁZARO</h1>
        <div className="subtitle">
          <span>Investigadora</span>
          <span>independiente</span>
        </div>
      </div>
      <div className="slogan">
        <p>Mapeo del panorama cultural desde las problemáticas de lo digital</p>
      </div>
    </header>
  )
}

export default Header
