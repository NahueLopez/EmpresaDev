import CardTeam from "./CardTeam.jsx"
import equipo from "../assets/equipo.jpg"

function SobreNosotros() {

  const team = [
    
              {
                Nombre :"Valentina Herrera",
                Cargo: "CEO - Arquitecto de Software",
              },
              {
                  Nombre :"Alejandro Martínez",
                  Cargo: "Desarrollador de Software Senior",
              },
              {
                Nombre :"Sebastián González",
                Cargo: "Ingeniero de Calidad de Software",
              },
              {
                Nombre :"Camila Mendoza",
                Cargo: "Especialista en Experiencia del Usuario (UX)",
            
              },
              {
                Nombre :"Javier Ramírez",
                Cargo: "Analista de Datos",
              },
              {
                Nombre :"Sofía López",
                Cargo: "Especialista en Seguridad Informática",
            },
            {
              Nombre :"Ricardo Vargas",
              Cargo: "Administrador de Sistemas y Redes",
            },
            {
              Nombre :"Gabriela Castro",
              Cargo: "Gerente de Proyectos de Software",
            }, 
      ]

  return (
    <>
    <section className="mx-auto pt-40  lg:pt-20  bg-white">
      <div className="container mx-auto flex flex-col md:flex-row text-center items-center justify-between order-last md:order-first">
        <div className="container order-first md:order-last flex flex-col lg:flex-row items-center">
          <div className="text-center md:text-2xl text-xl font-bold w-full px-4 md:px-40">
            Diseñar programas informáticos que sean seguros, fáciles de usar y escalables, con el fin de resguardar a los usuarios, prevenir actividades fraudulentas y cumplir con las normativas establecidas, constituye el objetivo del grupo de programadores.
          </div>
          <img src={equipo} className="rounded-xl mx-auto mt-5 md:w-[500px] md:h-[500px]" alt="Equipo" />
        </div>
      </div>
    </section>

        <div className="bg-[#52bed7] text-white py-5 md:text-2xl text-xl text-center justify-end mt-5">
          Nuestro Equipo:
        </div>
        <div className="container mx-auto flex flex-col lg:flex-row items-start mb-5">
          <div className="text-center md:text-2xl text-xl font-bold w-full px-4 md:px-40 text-[#52bed7]">
            Cada integrante aporta un valor único a nuestra empresa, conformando un equipo excepcional.
          </div>
        </div>
        <div className="bg-white">
          <div className="container mx-auto lg:mx-auto">
            <nav className="flex flex-wrap  justify-center items-center lg:gap-2">
              {team.map((miembro, index) => (
                <CardTeam key={index} nombre={miembro.Nombre} cargo={miembro.Cargo} />
              ))}
            </nav>
          </div>
        </div>

      </>
  )
}

export default SobreNosotros
