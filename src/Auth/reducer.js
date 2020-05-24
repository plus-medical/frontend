export const reducer = (state) => {
  return {
    // // Only curry functions:::::
    handleLogIn: ({ data }) => {
      console.log(data)
      // Llamar api, pasando useiro contraseña
      // devuelve Respuesta - Usuario o Error
      // Si devuelve un usuario
      // Guardar token
      return { authenticated: true }
      // Si es un error
      // return { authenticated: false, user:{}}
    },

    // handleSubmit: ({ save, event, formRef }) => {
    //   event.preventDefault()
    //   const form = new FormData(formRef.current)
    //   save(form, state.comment.id)
    //   debugForm(form)
    //   return { show: false }
    // },

    set: (key, value) => ({ [key]: value })
  }
}

export const initialState = () => {
  return {
    authenticated: false,
    user: {}
  }
}
