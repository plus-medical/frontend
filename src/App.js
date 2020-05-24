import React from 'react'
import { AuthProvider } from './context/authContext'
import { AppRoute } from './components/AppRoute'

export const App = () => {
  return (
    <AuthProvider>
      <AppRoute />
    </AuthProvider>
  )
}
