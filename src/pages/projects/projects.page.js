import {Header} from '../../components/header/header.component'
import './projects.styles.scss'

export const Projects = () => {
  return (
    <div className="projects">
      <Header />
      <main className="projects-container">
        <article className="espanlol">
          <div className="header">
            <div className="project-header"></div>
            <div className="description">
              <div className="explanation">
                <h3>Descripción</h3>
                <p>Ensayo consecuencia de la investigación teórica del proyecto Españlol, primer disco de Carlos Gárate. </p>
                <p>Españlol propone pensar sobre la identidad española a través de una mirada descreída, nacida en la ironía. Invoca imágenes de la españolidad que habitan en nuestra mente. Revisa nuestra propia identidad desde lugares tan comunes como la gastronomía, la naturaleza, canciones populares o el imaginario de Francisco de Goya. </p>
              </div>
              <div className="tags">
                <div className="theory">
                  <h3>Base teórica</h3>
                  <p>Compositores como Enrique Granados, Claude Debussy o Erik Satie y reflexiones de Saidiya Hartman, Ariella Aisha Azoulay o George Orwel entre otros. </p>
                </div>
                <div className="collaboration">
                  <h3>Colaboraciones artísticas</h3>
                  <p>El Niño de Elche, Toni Quiroga, Matias Uris, Federico Guardabrazo o Canoa, además de Carlos Gárate y yo misma.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="chapters-container">
            <h3 className="chapters-header">Para construír el futuro, hay que reconstruír el pasado</h3>
            <div className="chapters">
              <div className="cover chapter-1"></div>
              <div className="cover chapter-2"></div>
              <div className="cover chapter-3"></div>
              <div className="cover chapter-4"></div>
              <div className="cover chapter-5"></div>
              <div className="cover chapter-6"></div>
              <div className="cover chapter-7"></div>
              <div className="cover chapter-8"></div>
              <div className="cover chapter-9"></div>
            </div>
          </div>
        </article>
      </main>
    </div>
    
  )
}
