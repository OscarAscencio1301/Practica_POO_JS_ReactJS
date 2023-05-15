import Formulario from "../components/Formulario"
import Tabla from "../components/Tabla"
import Provider from "../context/Provider"


const Principal = () => {
  return (
    <Provider>

    <div className="container mt-5">
        <h1>CRUD JavaScript</h1>
    
      <Formulario />
      <Tabla />
    </div>
    
    </Provider>
  )
}

export default Principal
