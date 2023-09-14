import { useEffect, useState } from "react"
import { EVENTS } from "./logic/consts";
import { HomePage } from "./pages/home";
import { About } from "./pages/About";


function App() {
  const [currentPath, setCurrentPath]=useState(window.location.pathname);
  useEffect(()=>{
    const onLocationChange=()=>{
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener(EVENTS.pushstate, onLocationChange);
    window.addEventListener(EVENTS.popstate, onLocationChange);

    return ()=>{
      window.removeEventListener(EVENTS.popstate, onLocationChange);
    }
  }, [])
  return (
    <main>
      {currentPath == "/" && <HomePage/>}
      {currentPath == "/about" && <About/>}
    </main>
  )
}

export default App


