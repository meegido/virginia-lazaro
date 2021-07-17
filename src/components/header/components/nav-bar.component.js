
import {Link} from '@reach/router'
import {useContext, useState, useEffect} from 'react'
import {Context} from '../../../LanguageProvider'
import './nav-bar.styles.scss'
import {navBarConent} from './nav-bar-content'


const NavBarComponent = () => {  
  const [isOpen, setOpen] = useState(false)
  const [state, dispatch] = useContext(Context)
  const {language} = state;
   
  useEffect(() => {
    localStorage.setItem('language', state.language)
  })
  
  const toggleNav = () => {
    setOpen(!isOpen)
  }

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

  return (
    <div className="nav-container">
      <nav className={`nav`}>
        <ul className={`nav-list ${isOpen ? "open" : ""}`} >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/articles">{navBarConent[language].articles}</Link>
          </li>
          <li>
            <Link to="/projects">{navBarConent[language].projects}</Link>
          </li>
          <li>
            <Link to="/about">{navBarConent[language].about}</Link>
          </li>
          <li>
             <div className="language" onClick={handleLanguage}>
              <p className="language-text">{navBarConent[language].language}</p>
            </div>
          </li>
        </ul>
        <div className="burguer-wrapper">
          <button onClick={toggleNav} className="burguer">
            <span className={`${isOpen ? "open" : ""}`}></span>
            <span className={`${isOpen ? "open" : ""}`}></span>
            <span className={`${isOpen ? "open" : ""}`}></span>
        </button>
       </div>
      </nav>
    </div>
  )
}

export default NavBarComponent
