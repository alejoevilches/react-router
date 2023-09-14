import { useEffect, useState } from "react"

const NAVIGATION_EVENT="pushstate"

function navigate(href){
  window.history.pushState({}, "", href);
  const navigationEvent=new Event (NAVIGATION_EVENT)
  window.dispatchEvent(navigationEvent);
}

function HomePage(){
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una pagina de ejemplo para crear nuestro React Router</p>
      <button onClick={()=>{navigate("/about")}}>Ir a Sobre Nosotros</button>
    </>
  )
}

function About(){
  return (
    <>
      <h1>About</h1>
      <p>Hola! Mi nombre es Alejo y estoy creando un clon de React Router</p>
      <button href="/" onClick={()=>{navigate("/")}}>Ir a la home page</button>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath]=useState(window.location.pathname);
  useEffect(()=>{
    const onLocationChange=()=>{
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener(NAVIGATION_EVENT, onLocationChange);
    window.addEventListener("popstate", onLocationChange);

    return ()=>{
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange);
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


