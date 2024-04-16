import { FormCancha, FormProducto, Header, ListaCanchas, ListaProductos, ListaReservas, ListaUsuarios } from "./components"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer.jsx"
import { UserProvider } from "./context/UserContext.jsx"
import { CanchaProvider } from "./context/CanchaContext"
import { Contacto, DashboardAdmin, Error404, Galeria, Home, Nosotros, Registro, Reservas } from "./views"
import { Toaster } from "sonner"

function App() {
  return (
    <UserProvider>
      <CanchaProvider>
        <BrowserRouter>
          <Header />
          <Toaster position="top-center" visibleToasts={4} theme="dark" richColors duration={1000}/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/nosotros" element={<Nosotros/>}/>
            <Route path='/galeria' element={<Galeria/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/registro' element={<Registro/>}/>
            <Route path='/dashboard' element={<DashboardAdmin/>}>
              <Route path="/dashboard/listaUsuarios" element={<ListaUsuarios/>}/>
              <Route path="/dashboard/listaCanchas" element={<ListaCanchas/>}/>
              <Route path="/dashboard/listaProductos" element={<ListaProductos/>}/>
              <Route index path="/dashboard/listaReservas" element={<ListaReservas/>}/>
              <Route path="/dashboard/agregarProducto" element={<FormProducto/>}/>
              <Route path="/dashboard/agregarCancha" element={<FormCancha/>}/>
            </Route>
            <Route path='/dashboard/reservas' element={<Reservas/>}/>
            <Route path='/*' element={<Error404/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CanchaProvider>
    </UserProvider>
  )
}

export default App
