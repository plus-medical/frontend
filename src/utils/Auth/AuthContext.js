import React, { createContext, useEffect, useState } from 'react'
import { NAME_TOKEN } from 'src/utils/constants'
import { useAuth } from './useAuth'

const AuthContext = createContext()

export default function AuthProvider ({ children }) {
  const auth = useAuth()

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [role, setRole] = useState('')
  const { data, error, logout } = auth

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
    const localrole = window.localStorage.getItem('role')
    if (token) {
      setIsAuthenticated(true)
      setRole('role', localrole)
    } else if (error === '' && data.user) {
      setIsAuthenticated(true)
      setRole('role', data.user.role)
      !token && window.localStorage.setItem(NAME_TOKEN, true)
      window.localStorage.setItem('role', data.user.role)
    } else {
      setIsAuthenticated(false)
      window.localStorage.removeItem(NAME_TOKEN)
      window.localStorage.removeItem('role')
    }
  }, [JSON.stringify(data), error], isAuthenticated)

  return (
    <AuthContext.Provider
      value={{
        role,
        isAuthenticated,
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
