import { Suspense, lazy } from "react";
import { HomePage } from "./pages/Home";
import { ROUTES } from "./logic/consts";
import { Router } from "./components/Router";
import { Route } from "./components/Route";


const LazyAbout=lazy(()=>import("./pages/About"));


function App() {
  return (
    <main>
      <Suspense fallback={<h1>Loading...</h1>}>
      <Router routes={ROUTES}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={LazyAbout} />
      </Router>
      </Suspense>
    </main>
  )
}

export default App


