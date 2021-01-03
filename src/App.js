import {Router} from '@reach/router'
import Home from './home/Home'
import './App.css'

function App() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  )
}

export default App
