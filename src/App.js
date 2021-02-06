import {Router} from '@reach/router'
import {Home} from './pages/home/home.componet.page'

function App() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  )
}

export default App
