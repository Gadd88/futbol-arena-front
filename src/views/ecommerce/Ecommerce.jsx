import { useProductos } from '../../hooks'
import { CategoriaProducto } from '../../components'

export const Ecommerce = () => {

    const {productos} = useProductos()
    const bar = productos.filter(producto => producto.categoria == 'bar')
    const indumentaria = productos.filter(producto => producto.categoria == 'indumentaria')
    const accesorios = productos.filter(producto => producto.categoria == 'accesorio')
  return (
    <section className="w-full mx-auto h-full max-w-6xl bg-bg-200 rounded-xl overflow-hidden md:p-10 py-10">
        <h1 className='font-bold text-2xl lg:text-5xl my-10'>Nuestros Productos</h1>
        <p>Contamos con diversos tipos de productos</p>
        <article className='flex flex-col items-center justify-start overflow-x-scroll snap-x snap-mandatory h-full px-10'>
            <CategoriaProducto productos={bar} />
            <CategoriaProducto productos={indumentaria} />
            <CategoriaProducto productos={accesorios} />
        </article>
    </section>
  )
}
