export interface PropsChildren {
    children: JSX.Element | JSX.Element[]
}

export interface valoresInciales {
    elementos: Elemento[],
    elementoActivo: Elemento | null
}

export interface Elemento {
    id?: number,
    nombre: string,
    apellido: string
}


export interface PropsContext {
    state: valoresInciales,
    agregarElemento: (elemento: Elemento) => void
    editarElemento: (elemento: Elemento) => void,
    limpiarElemento: () => void,
    eliminarElemento: (id: number) => void,
    activarElemento: (elemento: Elemento) => void
}