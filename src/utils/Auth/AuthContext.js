import React, { useState, createContext, useEffect } from 'react'
import { useAuth } from './useAuth'

const AuthContext = createContext()
const NAME_TOKEN = 'token'

export default function AuthProvider ({ children }) {
  const auth = useAuth()
  const [authenticated, setAuthenticated] = useState(false)
  const [role, setRole] = useState('')
  const { data, error, logout } = auth

  const handleLogin = (params) => {
    auth.signIn(params)
  }

  const handleLogout = () => {
    logout()
    window.localStorage.removeItem(NAME_TOKEN)
    window.localStorage.removeItem('role')
    console.log(authenticated)
  }

  const handleSignUp = async (data) => {
    return await auth.signUp(data)
  }

  useEffect(() => {
    const token = window.localStorage.getItem(NAME_TOKEN)
    const localrole = window.localStorage.getItem('role')
    if (token) {
      setAuthenticated(true)
      setRole('role', localrole)
    } else if (error === '' && data.user) {
      setAuthenticated(true)
      setRole('role', data.user.role)
      !token && window.localStorage.setItem(NAME_TOKEN, true)
      window.localStorage.setItem('role', data.user.role)
    } else {
      setAuthenticated(false)
      window.localStorage.removeItem(NAME_TOKEN)
      window.localStorage.removeItem('role')
    }
  }, [JSON.stringify(data), error], authenticated)

  return (
    <AuthContext.Provider
      value={{
        role,
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
