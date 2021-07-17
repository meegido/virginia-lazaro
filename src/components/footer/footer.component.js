import {useContext} from 'react'
import {Context} from '../../LanguageProvider'


import './footer.styles.scss'
import './footer-content'
import { footerContent } from './footer-content'

export const Footer = () => {
  const [state] = useContext(Context)
  const {language} = state;

  return (
    <footer>
      <div className="contact-container">
        <p className="contact">{footerContent[language].howToContact} hi@virginialazaro.com</p>
      </div>
    </footer>
  )
}
