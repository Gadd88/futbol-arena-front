import { createContext, useEffect, useState } from "react";

export const CanchaContext = createContext(null)


export const CanchaProvider = ({children}) => {

    const [data, setData] = useState({
        fecha_buscada: '',
        cancha_id: ''
    })
    const [horarios, setHorarios] = useState([])

    const [listaCanchas, setListaCanchas] = useState([])

    const [reservation, setReservation] = useState({
        reservation_date: '',
        reservation_time: '',
        reservation_field_id: '',
        reservation_id:''
    })

    const handleDate = (date) => {
        const newDate = convertDate(date)
        setData({
            ...data,
            fecha_buscada: newDate
        })
    }
    const convertDate = (date) => {
        const splitDate = date.toLocaleDateString().split('/')
        for(let i=0; i<=2; i++){
            if(splitDate[i].length < 2){
            splitDate[i] = splitDate[i].concat('0').split('').reverse().join('')
            }
        }
        return splitDate.join('/')
    }

    const getCanchas = async() => {
        const response = await fetch('https://futbol-arena-back.onrender.com/api/canchas/lista')
        const result = await response.json()
        setListaCanchas(result)
    }

    useEffect(()=>{
        getCanchas()
    },[])

    const handleConsulta = (ev) => {
        setData({
            ...data,
            cancha_id: ev.target.id
        })
        consultaApi(data)
    }
    
    const consultaApi = async(query) =>{
        const response = await fetch(`https://futbol-arena-back.onrender.com/api/canchas?fecha_buscada=${query.fecha_buscada}&cancha_id=${query.cancha_id}`)
        const result = await response.json()
        setHorarios(result)
    }

    const [timeSelected, setTimeSelected] = useState()

    const selectedTime = (horario) => {
        setTimeSelected(horario)
        addReservation()
    }

    const addReservation = () => {
        const [cancha] = listaCanchas.filter(cancha => cancha.cancha_id === data.cancha_id)
        setReservation({
            reservation_id: crypto.randomUUID(),
            reservation_date: data.fecha_buscada,
            reservation_field_id: data.cancha_id,
            reservation_time: timeSelected,
            reservation_field_name: cancha.cancha_nombre
        })
        console.log(reservation)
    }

    return (
        <CanchaContext.Provider
            value={{
                listaCanchas,
                handleDate,
                handleConsulta,
                horarios,
                selectedTime,
                reservation,
                setReservation
            }}>
            {children}
        </CanchaContext.Provider>
    )
}