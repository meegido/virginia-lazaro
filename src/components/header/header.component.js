import {Link} from '@reach/router'
import {useContext, useEffect} from 'react'
import {Context} from '../../LanguageProvider'
import NavBarComponent from './components/nav-bar.component'
import {headerContent} from './header-content'
import './header.styles.scss'


export const Header = () => {
  const [state] = useContext(Context)
  const {language} = state
   
  useEffect(() => {
    localStorage.setItem('language', state.language)
  })


  return (
    <header className="main-header">
      <div className="main-nav">
        <NavBarComponent />
       
      </div>
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
