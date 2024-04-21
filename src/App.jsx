import { FormCancha, FormProducto, Header, ListaCanchas, ListaProductos, ListaReservas, ListaUsuarios, Footer } from "./components"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CanchaProvider, ProductosProvider, UserProvider } from "./context"
import { Contacto, DashboardAdmin, Ecommerce, Error404, Galeria, Home, Nosotros, Registro, Reservas } from "./views"
import { Toaster } from "sonner"


function App() {
  return (
    <UserProvider>
      <CanchaProvider>
        <ProductosProvider>
          <BrowserRouter>
            <Header />
            <Toaster position="top-center" visibleToasts={4} theme="dark" richColors duration={1000}/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/nosotros" element={<Nosotros/>}/>
              <Route path='/galeria' element={<Galeria/>}/>
              <Route path='/contacto' element={<Contacto/>}/>
              <Route path='/ecommerce' element={<Ecommerce/>}/>
              <Route path='/registro' element={<Registro/>}/>
              <Route path='/dashboard' element={<DashboardAdmin/>}>
                <Route path="/dashboard/listaUsuarios" element={<ListaUsuarios/>}/>
                <Route path="/dashboard/listaCanchas" element={<ListaCanchas/>}/>
                <Route path="/dashboard/listaProductos" element={<ListaProductos/>}/>
                <Route index path="/dashboard/listaReservas" element={<ListaReservas/>}/>
                <Route path="/dashboard/agregarProducto" element={<FormProducto/>}/>
                <Route path="/dashboard/agregarCancha" element={<FormCancha/>}/>
              </Route>
              <Route path='/reservas' element={<Reservas/>}/>
              <Route path='/*' element={<Error404/>}/>
            </Routes>
            <Footer/>
          </BrowserRouter>
        </ProductosProvider>
      </CanchaProvider>
    </UserProvider>
  )
}

export default App
