import React, { createContext, useReducer } from 'react'
import { reducer, initialState } from './reducer'

// import useReducer from '../../customHooks/useReducer'

const Context = createContext()

function Provider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState(initialState))

  // const existUser = JSON.parse(window.localStorage.getItem('tokens'))
  // const [user, setUser] = useState(existUser)

  return (
    <Context.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}b
    </Context.Provider>
  )
}

export { Context, Provider }
