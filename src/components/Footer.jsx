import logo from "../assets/Logo.png"
import { Link, useLocation } from "react-router-dom";
import "../style/navbar.css"

function Footer() {
    const location = useLocation();

  return (
        <footer className=" bottom-0 shadow-md dark:bg-gray-900 w-full">
            <div className="w-full  p-4 md:py-8 container  mx-auto">
                <div className="sm:flex sm:items-center sm:justify-between">
                        <Link to="EmpresaDev/"
                        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img className='cursor-pointer' src={logo} alt="logo" width={150} height={200} />
                        </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link
                                to="/EmpresaDev/"
                                className={`footer me-4 md:me-6 ${location.pathname === "/EmpresaDev/" ? "active" : ""}`}
                            >
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/EmpresaDev/servicios"
                                className={`footer me-4 md:me-6 ${location.pathname === "/EmpresaDev/servicios" ? "active" : ""}`}
                            >
                                Servicios
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/EmpresaDev/sobrenosotros"
                                className={`footer me-4 md:me-6 ${location.pathname === "/EmpresaDev/sobrenosotros" ? "active" : ""}`}
                            >
                                Sobre Nosotros
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/EmpresaDev/contacto"
                                className={`footer me-4 md:me-6 ${location.pathname === "/EmpresaDev/contacto" ? "active" : ""}`}
                            >
                                Contacto
                            </Link>                        
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Todos los Derechos Reservados.</span>
            </div>
        </footer>

  )
}

export default Footer
