import { useState } from "react"


const useForm = <T>(valoresInciales: T) => {

  const [form, setform] =  useState(valoresInciales)

  const changeEvent = ({target:{name, value}}:React.ChangeEvent<HTMLInputElement>) => {

    setform({
        ...form,
        [name]: value
    })

  }

  const reset = (valoresNuevos = valoresInciales) => {
    setform(valoresNuevos)
  }

  return{
    ...form,
    form,
    setform,
    changeEvent,
    reset
  }
}

export default useForm
