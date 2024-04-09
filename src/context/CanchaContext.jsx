import { createContext, useEffect, useState } from "react";

export const CanchaContext = createContext(null)


export const CanchaProvider = ({children}) => {

    const [data, setData] = useState({
        fecha_buscada: '',
        cancha_id: ''
    })
    const [horarios, setHorarios] = useState([])

    const [listaCanchas, setListaCanchas] = useState([])

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
        const response = await fetch('http://localhost:3001/api/canchas/lista')
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
        console.log(`http://localhost:3001/api/canchas?fecha_buscada=${query.fecha_buscada}&cancha_id=${query.cancha_id}`)
        const response = await fetch(`http://localhost:3001/api/canchas?fecha_buscada=${query.fecha_buscada}&cancha_id=${query.cancha_id}`)
        const result = await response.json()
        setHorarios(result)
    }

    return (
        <CanchaContext.Provider
            value={{
                listaCanchas,
                handleDate,
                handleConsulta,
                horarios

            }}>
            {children}
        </CanchaContext.Provider>
    )
}