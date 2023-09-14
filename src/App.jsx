
import { ROUTES } from "./logic/consts";
import { Router } from "./components/Router";


function App() {
  return (
    <main>
      <Router routes={ROUTES}></Router>
    </main>
  )
}

export default App


