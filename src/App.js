import React from 'react'
import { AuthProvider } from './context/authContext'
import { AppRoute } from './routes/AppRoute/index'

export const App = () => {
  return (
    <AuthProvider>
      <AppRoute />
    </AuthProvider>
  )
}
