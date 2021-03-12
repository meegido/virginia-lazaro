
import {Link} from '@reach/router'
import {useContext, useEffect, useState} from 'react'
import {Context} from '../../../LanguageProvider'
import './nav-bar.styles.scss'

const NavBarComponent = () => {  
  const [state, dispatch] = useContext(Context)
  const [isOpen, setOpen] = useState(false)
  
  
  useEffect(() => {
    localStorage.setItem('language', state.language)
  })

  function handleLanguage() {
    const {language} = state
    if (language === 'es') {
      localStorage.setItem('language', 'en')
      dispatch({type: 'SET_LANGUAGE', language: 'en'})
      return
    }
    localStorage.setItem('language', 'es')
    dispatch({type: 'SET_LANGUAGE', language: 'es'})
  }
  
  const toggleNav = () => {
    setOpen(!isOpen)
  }

  return (
    <div className="nav-wrapper">
      <nav className={`nav ${isOpen ? "open" : ""}`}>
       <div className="burguer-wrapper">
          <button onClick={toggleNav} className="burguer">
            <span className={`${isOpen ? "open" : ""}`}></span>
            <span className={`${isOpen ? "open" : ""}`}></span>
            <span className={`${isOpen ? "open" : ""}`}></span>
        </button>
       </div>
        <ul className={`nav-list ${isOpen ? "open" : ""}`}>
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
    </div>
  )
}

export default NavBarComponent
