import useElements from "../hooks/useElements"
import { Elemento } from "../interfaces/interfaces"


const ElementoInd = ({id, nombre, apellido}: Elemento) => {

  const {eliminarElemento, activarElemento} = useElements()

  return (
   <tr>
    <th>{id}</th>
    <td>{nombre}</td>
    <td>{apellido}</td>
    <td>
      <button className="btn btn-warning me-1" onClick={() => activarElemento({id, nombre, apellido})}>Editar</button>
      <button className="btn btn-danger" onClick={() => eliminarElemento(id || 0)}>Eliminar</button>
    </td>
   </tr>
  )
}

export default ElementoInd
