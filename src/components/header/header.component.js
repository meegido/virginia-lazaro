import {Link} from '@reach/router'
import {useContext, useEffect} from 'react'
import {Context} from '../../LanguageProvider'
import NavBarComponent from './components/nav-bar.component'
import {headerContent} from './header-content'
import './header.styles.scss'


export const Header = () => {
  const [state, dispatch] = useContext(Context)
  const {language} = state
   
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
    <header className="main-header">
      <NavBarComponent />
      <button onClick={handleLanguage}>ES/EN</button>
      <div className="header">
        <div className="subtitle">
          <p className="roles">
            <span>{headerContent[language].role.critique}</span>
          </p>
          
        </div>
        <h1 className="title">
          <Link to="/">{headerContent[language].brandName}</Link>
        </h1>
        <div className="subtitle">
          <p className="roles">
            <span>{headerContent[language].role.researcher}</span>
          </p>
        </div>
      </div>
      <div className="slogan">
        <p>{headerContent[language].slogan}</p>
      </div>
    </header>
  )
}
