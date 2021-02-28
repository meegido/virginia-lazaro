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
            <p className="contact">hi@virginialazaro.com</p>
          </div>
          <div className="profile-data">
            <h2 className="metier">{content[language].metier}</h2>
          </div>
        </section>
        <section className="profile-description">
          <p>{content[language].description.about}</p>
          <div>
            <h3>{content[language].description.curriculumTitle}</h3>
            <p>{content[language].description.curriculumText}</p>
          </div>
        </section>
        <section className="tips"></section>
      </main>
    </div>
  )
}
