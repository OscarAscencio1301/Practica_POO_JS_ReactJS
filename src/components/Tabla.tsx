import useElements from "../hooks/useElements"
import ElementoInd from "./Elemento"


const Tabla = () => {

    const {elementos} = useElements()

    return (
        <table className="table table-striped">
        <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody id="body">
            {
                elementos.map(elemento => <ElementoInd key={elemento.id} {...elemento}/>)
            }
          </tbody>
      </table>
    )
  }
  
  export default Tabla
  