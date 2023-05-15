import { useReducer } from "react"
import { Elemento, PropsChildren, valoresInciales } from "../interfaces/interfaces"
import { Context } from "./Context"
import { elementoReducer } from "../reducers/elementoReducer"


const initalState:valoresInciales = {
    elementos: [],
    elementoActivo: null
}

const Provider = ({children}: PropsChildren) => {

    const [state, dispatch] = useReducer(elementoReducer, initalState)

    const agregarElemento = (elemento: Elemento) => {
        dispatch({
            type: 'Agregar',
            payload: elemento
        })
    }

    const editarElemento = (elemento: Elemento) => {
        dispatch({
            type: 'Actualizar',
            payload: elemento
        })
    }

    const activarElemento = (elemento: Elemento) => {
        dispatch({
            type: 'Activar',
            payload: elemento
        })
    }

    const eliminarElemento = (id: number) => {
        dispatch({
            type: 'Eliminar',
            payload: {id}
        })
    }

    const limpiarElemento = () => {
        dispatch({
            type: 'Limpiar'
        })
    }

  return (
    <Context.Provider value={{
        state,
        agregarElemento,
        editarElemento,
        limpiarElemento,
        eliminarElemento,
        activarElemento
    }}>
        {children}
      
    </Context.Provider>
  )
}

export default Provider
