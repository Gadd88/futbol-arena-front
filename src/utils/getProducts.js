export const getProducts = async () => {
    const response = await fetch('https://futbol-arena-back.onrender.com/api/products')
    const result = await response.json()
    return result
}