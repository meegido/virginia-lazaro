
import {Link} from '@reach/router'
import {useContext, useState} from 'react'
import {Context} from '../../../LanguageProvider'
import './nav-bar.styles.scss'
import {navBarConent} from './nav-bar-content'

const NavBarComponent = () => {  
  const [state] = useContext(Context)
  const [isOpen, setOpen] = useState(false)
  const {language} = state;
  
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
        </ul>
      </nav>
    </div>
  )
}

export default NavBarComponent
