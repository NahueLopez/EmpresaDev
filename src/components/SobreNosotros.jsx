import user from "../assets/User.png"
import equipo from "../assets/equipo.jpg"

function SobreNosotros() {
  return (
    <section className=" mx-auto pt-20 lg:pt-40 h-screen bg-white ">
   <div className="container mx-auto flex flex-col md:flex-row text-center items-center justify-between order-last md:order-first"> 
      <div className="container order-first md:order-last flex flex-col lg:flex-row items-center">
        <div className="text-center md:text-2xl text-xl font-bold w-full px-4 md:px-40">
          Diseñar programas informáticos que sean seguros, fáciles de usar y escalables, con el fin de resguardar a los usuarios, prevenir actividades fraudulentas y cumplir con las normativas establecidas, constituye el objetivo del grupo de programadores.
        </div>
        <img src={equipo} className="rounded-xl mx-auto mt-5 md:w-[500px] md:h-[500px]" alt="Equipo" />
      </div>
    </div>
      <div className="bg-[#52bed7] ">
        <div className="py-5 md:text-2xl text-xl text-center justify-end mt-5 text-white">
          Nuestros Equipo:
        </div>
      </div>
      <div className="container order-first md:order-last flex flex-col lg:flex-row items-center mx-auto mb-5">
          <div className="text-center md:text-2xl text-xl font-bold w-full px-4 md:px-40 text-[#52bed7]">
            Cada integrante aporta un valor único a nuestra empresa, conformando un equipo excepcional.
          </div>
        </div>
      <div className="bg-white ">
        <div className="container mx-auto">
          <nav className="flex flex-wrap gap-5 justify-center items-center overflow-y-auto">
              <div>
                <img src={user} className="border rounded-full mx-auto mt-5 w-1/2" alt="Servicios" />
                <p className="text-center md:text-1xl text-xl text-black">Nombre</p>
                <p className="text-center md:text-1xl text-xl text-black">Puesto</p>                 
              </div>
              <div>
              <img src={user} className="border rounded-full mx-auto mt-5 w-1/2" alt="Servicios" />
                <p className="text-center md:text-1xl text-xl text-black">Nombre</p>
                <p className="text-center md:text-1xl text-xl text-black">Puesto</p>

              </div>
              <div>
              <img src={user} className="border rounded-full mx-auto mt-5 w-1/2" alt="Servicios" />
                <p className="text-center md:text-1xl text-xl text-black">Nombre</p>
                <p className="text-center md:text-1xl text-xl text-black">Puesto</p>

              </div>
              <div>
              <img src={user} className="border rounded-full mx-auto mt-5 w-1/2" alt="Servicios" />
                <p className="text-center md:text-1xl text-xl text-black">Nombre</p>
                <p className="text-center md:text-1xl text-xl text-black">Puesto</p>

              </div>
              <div>
              <img src={user} className="border rounded-full mx-auto mt-5 w-1/2" alt="Servicios" />
                <p className="text-center md:text-1xl text-xl text-black">Nombre</p>
                <p className="text-center md:text-1xl text-xl text-black">Puesto</p>
              </div>
              <div>
              <img src={user} className="border rounded-full mx-auto mt-5 w-1/2" alt="Servicios" />
                <p className="text-center md:text-1xl text-xl text-black">Nombre</p>
                <p className="text-center md:text-1xl text-xl text-black">Puesto</p>
              </div>
              <div>
              <img src={user} className="border rounded-full mx-auto mt-5 w-1/2" alt="Servicios" />
                <p className="text-center md:text-1xl text-xl text-black">Nombre</p>
                <p className="text-center md:text-1xl text-xl text-black">Puesto</p>
              </div>
              <div>
              <img src={user} className="border rounded-full mx-auto mt-5 w-1/2" alt="Servicios" />
                <p className="text-center md:text-1xl text-xl text-black">Nombre</p>
                <p className="text-center md:text-1xl text-xl text-black">Puesto</p>
              </div>
              
          </nav>
        </div>

        </div>
      
    
    </section>
  )
}

export default SobreNosotros
