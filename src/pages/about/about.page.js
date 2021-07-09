import {Header} from '../../components/header/header.component'
import './about.styles.scss'
import {useContext} from 'react'
import {Context} from '../../LanguageProvider'
import {content} from './content'

export const About = () => {
  const [state] = useContext(Context)
  const {language} = state

  return (
    <div className="about">
      <Header />
      <main className="about-container">
        <section className="profile-container">
          <div className="profile">
            <div className="avatar"></div>
          </div>
        </section>
        <section className="profile-description">
          <p className="metier-description">{content[language].description.about}</p>
          <div className="curriculum-description">
            <p className="curriculum-description-text">{content[language].description.metier}</p>
            <p className="curriculum-description-text">{content[language].description.curriculumText}</p>
          </div>
          <div className="contact-container">
            <h2 className="contact-title">{content[language].description.contact}</h2>
            <div className="contact">
              <a className="insta-link" href="https://www.instagram.com/virginia_lazaro_/" target="blank">
                <img className="insta-icon" alt="Virginia Lázaro instagram profile" src="https://res.cloudinary.com/meegido/image/upload/v1625807058/d2e53ea31ec15e6a8129008563713de5_ciwxuv.png"/>
              </a>
              <p className="contact-mail">hi@virginialazaro.com</p>
            </div>
          </div>
        </section>
        <section className="tips"></section>
      </main>
    </div>
  )
}
