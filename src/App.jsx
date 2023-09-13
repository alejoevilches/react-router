import { useState } from "react"

function HomePage(){
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una pagina de ejemplo para crear nuestro React Router</p>
      <a href="/about">Ir a Sobre Nosotros</a>
    </>
  )
}

function About(){
  return (
    <>
      <h1>About</h1>
      <p>Hola! Mi nombre es Alejo y estoy creando un clon de React Router</p>
      <a href="/">Ir a la home page</a>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath]=useState(window.location.pathname);
  return (
    <main>
      {currentPath == "/" && <HomePage/>}
      {currentPath == "/about" && <About/>}
    </main>
  )
}

export default App


