  import { BrowserRouter, Routes , Route} from 'react-router-dom'

  import Header from './components/Header.jsx'
  import Index from './components/Index.jsx'
  import Servicios from './components/Servicios.jsx'
  import SobreNosotros from './components/SobreNosotros.jsx'
  import Contacto from './components/Contacto.jsx'


  function App() {

    return (

      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Index />}/>
          <Route path='servicios' element={<Servicios />} />
          <Route path='sobrenosotros' element={<SobreNosotros />} />
          <Route path='contacto' element={<Contacto />} />

        </Routes>
      </BrowserRouter>    
    )
  }

  export default App
