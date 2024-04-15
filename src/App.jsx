import { Header } from "./components"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer.jsx"
import { UserProvider } from "./context/UserContext.jsx"
import { CanchaProvider } from "./context/CanchaContext"
import { Contacto, Error404, Galeria, Home, Nosotros, Registro, Reservas } from "./views"
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <UserProvider>
      <CanchaProvider>
        <BrowserRouter>
        <ToastContainer
            autoClose={1500} 
            position='top-center'
            
            />
          <Header />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/nosotros" element={<Nosotros/>}/>
            <Route path='/galeria' element={<Galeria/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/registro' element={<Registro/>}/>
            <Route path='/*' element={<Error404/>}/>
            <Route path='/reservas' element={<Reservas/>}/>
            <Route path='/*' element={<Error404/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CanchaProvider>
    </UserProvider>
  )
}

export default App
