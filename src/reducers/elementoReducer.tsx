import { valoresInciales } from "../interfaces/interfaces";
import { Types } from "../types/types";

export const elementoReducer = (state:valoresInciales, action:Types) => {

    switch(action.type){
        case 'Agregar': 
        return {
            ...state,
            elementos: [...state.elementos, action.payload]
        }

        case 'Activar': 
        return {
            ...state,
            elementoActivo: action.payload
        }

        case 'Actualizar': 
        return {
            ...state,
            elementos: state.elementos.map(element => element.id === action.payload.id ? action.payload : element)
        }

        case 'Eliminar': 
        return {
            ...state,
            elementos: state.elementos.filter(element => element.id !== action.payload.id)
        }

        case 'Limpiar': 
        return {
            ...state,
            elementoActivo: null
        }

        default:
            return state
    }

}