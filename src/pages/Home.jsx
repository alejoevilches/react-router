import { Link } from "../components/Link"

export default function HomePage(){
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una pagina de ejemplo para crear nuestro React Router</p>
      <Link to="/about">Ir a sobre nosotros</Link>
    </>
  )
}
