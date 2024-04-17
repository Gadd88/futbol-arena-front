export const getReservations = async() =>{
    const responseReservas = await fetch('https://futbol-arena-back.onrender.com/api/reservations')
    const resultReservas = await responseReservas.json()
    const responseCanchas = await fetch('https://futbol-arena-back.onrender.com/api/canchas/lista')
    const resultCanchas = await responseCanchas.json()
    const reservas = resultReservas.map(reserva => {
        for(let i = 0; i < resultReservas.length; i++) {
            if(reserva.reservation_field_id === resultCanchas[i].cancha_id){
                return{
                    ...reserva,
                    cancha_nombre: resultCanchas[i].cancha_nombre
                }
            }else{
                return reserva
            }
        }
        return reserva
    })
    return reservas
}

export const eliminarReserva = async (id,user) =>{
    const {user_id, isAdmin} = user
    const userData = {
        user_id: user_id,
        isAdmin: isAdmin
    }
    const response = await fetch(`http://localhost:3001/api/reservations/${id}`,{
        method: 'DELETE',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(userData)
    })
    const result = await response.json()
    console.log(result)
}
