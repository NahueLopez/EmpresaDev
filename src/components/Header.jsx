import logo from "../assets/Logo.png"
import { Link, useLocation } from "react-router-dom";
import "../style/navbar.css"

const Header = () => {
 
  const location = useLocation();

  return (
    <header className=" fixed top-0 w-full bg-gray-100 shadow-md">
      <div className='container  mx-auto flex justify-between items-center p-2'>
        <Link to="/">
          <img className='cursor-pointer' src={logo} alt="logo" width={150} height={200} />
        </Link>

        <nav className="flex space-x-4">
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            Inicio
          </Link>
          <Link
            to="/servicios"
            className={`nav-link ${location.pathname === "/servicios" ? "active" : ""}`}
          >
            Servicios
          </Link>
          <Link
            to="/sobrenosotros"
            className={`nav-link ${location.pathname === "/sobrenosotros" ? "active" : ""}`}
          >
            Sobre Nosotros
          </Link>
          <Link
            to="/contacto"
            className={`nav-link ${location.pathname === "/contacto" ? "active" : ""}`}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>



  )
}

export default Header;
