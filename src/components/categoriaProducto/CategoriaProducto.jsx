import { CardProducto } from "../cardProducto/CardProducto"

export const CategoriaProducto = ({productos}) => {
  return (
    <section className='gap-10 max-w-full w-full'>
        <h3 className="text-3xl font-bold text-text-200 flex justify-start my-10 border-b-text-200 border-b-4 pb-5">{productos[0].categoria.toUpperCase()}</h3>
        <article className="flex items-center justify-start overflow-x-scroll gap-10">
            {
                productos?.map(producto => (
                    <CardProducto key={producto.id} data={producto}/>
                ))
            }
        </article>
    </section>
  )
}
