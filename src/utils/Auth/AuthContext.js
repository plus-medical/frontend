import React, { useState, createContext, useEffect } from 'react'
import { useAuth } from './useAuth'

const AuthContext = createContext()
const NAME_TOKEN = 'token'

function AuthProvider ({ children }) {
  const auth = useAuth()
  const [authenticated, setAuthenticated] = useState(true)
  const { data, setData, error, logout } = auth

  const handleLogin = (params) => {
    auth.signIn(params)
  }

  const handleLogout = () => {
    logout()
    window.localStorage.removeItem(NAME_TOKEN)
    window.localStorage.removeItem('role')
  }

  const handleSignUp = async (data) => {
    return await auth.signUp(data)
  }

  useEffect(() => {
    const token = window.localStorage.getItem(NAME_TOKEN)
    if (token) {
      setAuthenticated(true)
    } else if (error === '' && data.user) {
      setAuthenticated(true)
      !token && window.localStorage.setItem(NAME_TOKEN, true)
      window.localStorage.setItem('role', data.user.role)
    } else {
      setAuthenticated(false)
      window.localStorage.removeItem(NAME_TOKEN)
    }
  }, [JSON.stringify(data), error])

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        error,
        data,
        setAuthenticated,
        handleLogin,
        handleLogout,
        handleSignUp
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
