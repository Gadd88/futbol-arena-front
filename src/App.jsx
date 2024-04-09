import { Header } from "./components"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Contacto, Error404, Galeria, Home, Nosotros, Registro, Reservas } from "./views"
import { CanchaProvider } from "./context/CanchaContext"

function App() {

  return (
    <CanchaProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path='/galeria' element={<Galeria/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/registro' element={<Registro/>}/>
          <Route path='/reservas' element={<Reservas/>}/>
          <Route path='/*' element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </CanchaProvider>
  )
}

export default App
