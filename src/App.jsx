import { AuthProvider } from './components/context/AuthContext';
import { Header } from "./components"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Contacto, Error404, Galeria, Home, Nosotros, Registro } from "./views"
import Footer from "./components/footer/Footer.jsx"

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path='/galeria' element={<Galeria />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>
      <Footer />
    </AuthProvider>
    </BrowserRouter>
  )
}

export default App
