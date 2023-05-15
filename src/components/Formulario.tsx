import { FormEvent, useEffect } from "react"
import useForm from "../hooks/useForm"
import useElements from "../hooks/useElements"

const Formulario = () => {
  const {nombre, apellido, changeEvent, form, reset,setform} = useForm({
    nombre: '',
    apellido: ''
  })

  const {agregarElemento, elementoActivo, editarElemento, limpiarElemento} = useElements()


  const sendForm = (e:FormEvent) => {
    e.preventDefault()

    if(elementoActivo){
      editarElemento({...form})
    }else {
      agregarElemento({id: Date.now(), ...form})
    }

    limpiarElemento()
    reset()
  }

  useEffect(() => {
    if(elementoActivo){
      setform(elementoActivo)
    }else {
      setform({
        nombre: '',
        apellido: ''
      })
    }
  }, [elementoActivo])

    return (
        <form id="form" onSubmit={sendForm}>
        <div className="form-group">
          <label>Nombre</label>
          <input type="text" className="form-control" name="nombre" id="nombre" placeholder="Oscar ..." value={nombre} onChange={changeEvent}/>
        </div>
        <div className="form-group">
          <label>Apellido</label>
          <input type="text" className="form-control" name="apellido" id="apellido" placeholder="Ascencio ..." value={apellido} onChange={changeEvent} />
        </div>
        <button className="btn btn-primary mt-3 principal" type="submit">{elementoActivo ? 'Editar': 'Agregar'}</button>
      </form>
    )
  }
  
  export default Formulario
  