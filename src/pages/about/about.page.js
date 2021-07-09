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
            <div className="instagram"></div>
          </div>
        </section>
        <section className="profile-description">
          <p className="metier-description">{content[language].description.about}</p>
          <div className="curriculum-description">
            <p className="curriculum-description-text">{content[language].description.metier}</p>
            <p className="curriculum-description-text">{content[language].description.curriculumText}</p>
          </div>
          <p className="contact">hi@virginialazaro.com</p>

        </section>
        <section className="tips"></section>
      </main>
    </div>
  )
}
