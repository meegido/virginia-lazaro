import {Router} from '@reach/router'
import {Home} from './pages/home/home.componet.page'
import {About} from './pages/about/about.page'

function App() {
  return (
    <Router>
      <Home path="/" />
      <About path="/about" />
    </Router>
  )
}

export default App
