import React, { useContext, useEffect, useState } from 'react'
import { CanchaContext } from '../context/CanchaContext'

export const useCancha = () => {

    const { handleDate, listaCanchas, handleConsulta } = useContext(CanchaContext)


  return {
    handleDate,
    listaCanchas,
    handleConsulta
  }
}
