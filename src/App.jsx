import { About } from "./pages/About";
import { HomePage } from "./pages/Home";
import { ROUTES } from "./logic/consts";
import { Router } from "./components/Router";
import { Route } from "./components/Route";


function App() {
  return (
    <main>
      <Router routes={ROUTES}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={About} />
      </Router>
    </main>
  )
}

export default App


