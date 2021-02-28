import {Link} from '@reach/router'
import './header.styles.scss'
import {useEffect, useState} from 'react'

export const Header = () => {
  const [language, setLanguage] = useState(
    sessionStorage.getItem('language') || 'es',
  )
  useEffect(() => {
    sessionStorage.setItem('language', language)
  })

  function handleLanguage() {
    if (sessionStorage.getItem('language') === 'es') {
      setLanguage('en')
      return
    }

    setLanguage('es')
  }

  return (
    <header className="main-header">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/articles">ARTICLES</Link>
          </li>
          <li>
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li>
            <button onClick={handleLanguage}>ES/EN</button>
          </li>
        </ul>
      </nav>
      <div className="name">
        <div className="subtitle">
          <span>Crítica</span>
          <span>cultural</span>
        </div>
        <h1 className="title">
          <Link to="/">VIRGINIA LÁZARO</Link>
        </h1>
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
