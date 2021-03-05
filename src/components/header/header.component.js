import {Link} from '@reach/router'
import NavBarComponent from './components/nav-bar.component'
import './header.styles.scss'


export const Header = () => {
  return (
    <header className="main-header">
      <NavBarComponent />
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
