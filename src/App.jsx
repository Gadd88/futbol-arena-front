import { Header } from "./components"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Contacto, Error404, Galeria, Home, Nosotros, Registro } from "./views"
import Footer from "./components/footer/Footer.jsx"
import { UserProvider } from "./context/UserContext.jsx"

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path='/galeria' element={<Galeria/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/registro' element={<Registro/>}/>
          <Route path='/*' element={<Error404/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
