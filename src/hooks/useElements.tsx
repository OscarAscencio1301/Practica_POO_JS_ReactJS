import { useContext } from 'react'
import { Context } from '../context/Context'

const useElements = () => {

    const { state: { elementos, elementoActivo }, agregarElemento, editarElemento, eliminarElemento, limpiarElemento, activarElemento } = useContext(Context)

    return {
        elementos,
        elementoActivo,
        agregarElemento,
        editarElemento,
        eliminarElemento,
        limpiarElemento,
        activarElemento
    }
}

export default useElements
