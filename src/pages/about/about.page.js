import {Header} from '../../components/header/header.component'
import "./about.styles.scss"


export const About = () => {
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
            <h2 className="metier">Digital image analyst</h2>
          </div>
        </section>
        
      </main>
    </div>
  )
}
