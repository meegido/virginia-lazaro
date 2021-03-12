
import {Link} from '@reach/router'
import {useContext, useEffect, useState} from 'react'
import {Context} from '../../../LanguageProvider'
import './nav-bar.styles.scss'
import {navBarConent} from './nav-bar-content'

const NavBarComponent = () => {  
  const [state, dispatch] = useContext(Context)
  const [isOpen, setOpen] = useState(false)
  const {language} = state;
  
  
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
            <Link to="/about">{navBarConent[language].about}</Link>
          </li>
          <li>
            <Link to="/articles">{navBarConent[language].articles}</Link>
          </li>
          <li>
            <Link to="/projects">{navBarConent[language].projects}</Link>
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
