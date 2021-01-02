import {Router} from '@reach/router'
import Home from './home/Home'
import './App.css'
import Header from './header/Header'

function App() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  )
}

export default App
