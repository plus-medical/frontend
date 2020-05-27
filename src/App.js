import React from 'react'
import { AuthProvider } from './utils/Auth/AuthContext'
import { MessageProvider } from './utils/Messages/MessageContext'
import { SetRoutes } from './routes/SetRoutes'

export const App = () => {
  return (
    <AuthProvider>
      <MessageProvider>
        <SetRoutes />
      </MessageProvider>
    </AuthProvider>
  )
}
