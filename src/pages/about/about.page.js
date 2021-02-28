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
        <section className="profile-description">
          <p>Relaciono las problemáticas específicas derivadas de la tecnología digital, el neoliberalismo, la globalización y las imágenes simbólicas. Esta trayectoria crítica, me mantiene en un enfoque constante sobre el impacto de la tecnología digital en los modos de vida y la definición de los sujetos.</p>
          <div>
            <h3>Curriculum biography</h3>
            <p>Soy licenciada en Bellas Artes por la Universidad Complutense de Madrid, donde obtuve la beca de colaboración con el Departamento de Estética e Historia del Arte, y después cursé el Máster en Culturas Visuales e Historia del Arte Contemporáneo en el Museo Reina Sofía.</p>
          </div>
        </section >
        <section className="tips"></section>
      </main>
    </div>
  )
}
