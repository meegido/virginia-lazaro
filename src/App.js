import {Router} from '@reach/router'
import {Home} from './pages/home/home'

function App() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  )
}

export default App
