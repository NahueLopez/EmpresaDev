import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import logo from '../assets/Logo.png';

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-gray-100 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-2">
        <Link to="EmpresaDev/">
          <img className="cursor-pointer" src={logo} alt="logo" width={150} height={200} />
        </Link>

        {/* Menú para pantallas más pequeñas */}
        <div className="md:hidden absolute right-0 mr-4 justify-center">
          <button
            onClick={toggleMenu}
            className="text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200" 
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Menú de navegación */}
        <nav className="hidden md:flex space-x-4 ">
          <Link
            to="/EmpresaDev/"
            className={`nav-link ${location.pathname === '/EmpresaDev/' ? 'active' : ''}`}
          >
            Inicio
          </Link>
          <Link
            to="/EmpresaDev/servicios"
            className={`nav-link ${
              location.pathname === '/EmpresaDev/servicios' ? 'active' : ''
            }`}
          >
            Servicios
          </Link>
          <Link
            to="/EmpresaDev/sobrenosotros"
            className={`nav-link ${
              location.pathname === '/EmpresaDev/sobrenosotros' ? 'active' : ''
            }`}
          >
            Sobre Nosotros
          </Link>
          <Link
            to="/EmpresaDev/contacto"
            className={`nav-link ${location.pathname === '/EmpresaDev/contacto' ? 'active' : ''}`}
          >
            Contacto
          </Link>
        </nav>

        {/* Menú desplegable para pantallas más pequeñas */}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="md:hidden absolute top-12 right-0 w-full bg-white mt-10">
            <div className="flex flex-col p-4 space-y-2">
              <Link
                to="/EmpresaDev/"
                className={`nav-link ${location.pathname === '/EmpresaDev/' ? 'active' : ''}`}
                onClick={toggleMenu}
              >
                Inicio
              </Link>
              <Link
                to="/EmpresaDev/servicios"
                className={`nav-link ${
                  location.pathname === '/EmpresaDev/servicios' ? 'active' : ''
                }`}
                onClick={toggleMenu}
              >
                Servicios
              </Link>
              <Link
                to="/EmpresaDev/sobrenosotros"
                className={`nav-link ${
                  location.pathname === '/EmpresaDev/sobrenosotros' ? 'active' : ''
                }`}
                onClick={toggleMenu}
              >
                Sobre Nosotros
              </Link>
              <Link
                to="/EmpresaDev/contacto"
                className={`nav-link ${
                  location.pathname === '/EmpresaDev/contacto' ? 'active' : ''
                }`}
                onClick={toggleMenu}
              >
                Contacto
              </Link>
            </div>
          </div>
        </Transition>
      </div>
    </header>
  );
};

export default Header;
