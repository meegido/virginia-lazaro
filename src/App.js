import {Router} from '@reach/router'
import {Home} from './pages/home/home.page'
import {About} from './pages/about/about.page'
import {CategoryPage} from './pages/category/category.page'
import LanguageProvider from './LanguageProvider'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Home path="/" />
        <CategoryPage path="/category/:categoryName" />
        <About path="/about" />
      </Router>
    </LanguageProvider>
  )
}

export default App
