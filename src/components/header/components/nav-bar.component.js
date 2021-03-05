
import {Link} from '@reach/router'
import {useContext, useEffect} from 'react'
import {Context} from '../../../LanguageProvider'

const NavBarComponent = () => {  
  const [state, dispatch] = useContext(Context)
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

  return (
    <>
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
    </>
  )
}

export default NavBarComponent
