import {Router} from '@reach/router'
import {Home} from './pages/home/home.page'
import {About} from './pages/about/about.page'
import {CategoryPage} from './pages/category/category.page'

function App() {
  return (
    <Router>
      <Home path="/" />
      <CategoryPage path="/category/:categoryName" />
      <About path="/about" />
    </Router>
  )
}

export default App
