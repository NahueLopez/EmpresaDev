  import { BrowserRouter, Routes , Route} from 'react-router-dom'

  import Header from './components/Header.jsx'
  import Index from './components/Index.jsx'
  import Servicios from './components/Servicios.jsx'
  import SobreNosotros from './components/SobreNosotros.jsx'
  import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'


  function App() {

    return (

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/EmpresaDev/' element={<Index />}/>
          <Route path='/EmpresaDev/servicios' element={<Servicios />} />
          <Route path='/EmpresaDev/sobrenosotros' element={<SobreNosotros />} />
          <Route path='/EmpresaDev/contacto' element={<Contacto />} />
        </Routes>
        <Footer/>
      </BrowserRouter>    
    )
  }

  export default App
