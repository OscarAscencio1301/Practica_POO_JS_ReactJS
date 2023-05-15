import { Elemento } from "../interfaces/interfaces"

export type Types = {
    type: 'Agregar',
    payload: Elemento
}

    |

{
    type: 'Activar',
    payload: Elemento
}


    |

{
    type: 'Actualizar',
    payload: Elemento
}


    |

{
    type: 'Eliminar',
    payload: { id: number }
}

    |


{
    type: 'Limpiar'
}