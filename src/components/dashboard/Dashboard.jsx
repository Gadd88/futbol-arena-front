import { Link, Outlet, useNavigate } from "react-router-dom"

export const Dashboard = () => {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('usuario')) || ''
    if(!user?.isAdmin){
        return navigate('/')
    }
  return (
    // bg-[#f8f4f3]
    <section className="w-full flex items-start justify-center space-x-5">
        {/* <!--sidenav --> */}
        <article className="w-1/3 h-screen bg-bg-100 p-4 z-50 rounded-lg" id="sidebar">
            <Link to="/" className="flex items-center pb-4 border-b border-b-gray-800">
                <h2 className="font-bold text-2xl text-black">FÚTBOL <span className="bg-arena-green-400 text-white px-2 rounded-md">ARENA</span></h2>
            </Link>
            <ul className="mt-4">
                <span className="text-text-200 font-bold">ADMIN</span>
                <li className="mb-1 group">
                    <Link to="/dashboard/agregarCancha" className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                        <i className="ri-home-2-line mr-3 text-lg"></i>
                        <span className="text-sm">Canchas</span>
                    </Link>
                </li>
                <li className="mb-1 group">
                    <Link to="/dashboard/listaUsuarios" className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                        <i className='bx bx-user mr-3 text-lg'></i>                
                        <span className="text-sm">Usuarios</span>
                        <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
                    </Link>
                </li>
                <li className="mb-1 group">
                    <Link to="/dashboard/agregarProducto" className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                        <i className='bx bx-user mr-3 text-lg'></i>                
                        <span className="text-sm">Productos</span>
                        <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
                    </Link>
                </li>
                
                <span className="text-text-200 font-bold">VISUALES</span>
                <li className="mb-1 group">
                    <Link to="/dashboard/listaCanchas" className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                        <i className='bx bxl-blogger mr-3 text-lg' ></i>                 
                        <span className="text-sm">Lista de Canchas</span>
                        <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
                    </Link>
                </li>
                <li className="mb-1 group">
                    <Link to="/dashboard/listaReservas" className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                        <i className='bx bx-archive mr-3 text-lg'></i>                
                        <span className="text-sm">Lista de Reservas</span>
                    </Link>
                </li>
                <li className="mb-1 group">
                    <Link to="/dashboard/listaProductos" className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                        <i className='bx bx-archive mr-3 text-lg'></i>                
                        <span className="text-sm">Lista de Productos</span>
                    </Link>
                </li>
            </ul>
        </article>
        {/* <!-- end sidenav --> */}

        <article className="w-2/3 bg-primary-200 min-h-screen transition-all rounded-lg" id="admin-content">
        {/* <!-- Content --> */}
            <Outlet />
            {/* <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    
                </div>
            </div> */}
        {/* <!-- End Content --> */}
        </article>
    </section>
  )
}
