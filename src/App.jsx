import { Suspense, lazy } from "react";
import { ROUTES } from "./logic/consts";
import { Router } from "./components/Router";
import { Route } from "./components/Route";


const LazyAbout=lazy(()=>import("./pages/About"));
const lazyHomePage=lazy(()=>import("./pages/Home"));

function App() {
  return (
    <main>
      <Suspense fallback={null}>
      <Router routes={ROUTES}>
          <Route path='/' Component={lazyHomePage} />
          <Route path='/about' Component={LazyAbout} />
      </Router>
      </Suspense>
    </main>
  )
}

export default App


