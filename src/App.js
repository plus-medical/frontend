import React from 'react'
import { SetRoutes } from './routes/SetRoutes'
import { AuthProvider } from './utils/Auth/AuthContext'
import { MessageProvider } from './utils/Messages/MessageContext'

export const App = () => (
  <AuthProvider>
    <MessageProvider>
      <SetRoutes />
    </MessageProvider>
  </AuthProvider>
)
