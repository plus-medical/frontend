import React, { useContext } from 'react'
import { Route } from 'react-router-dom'
import { Context } from '../../Auth/Context'

export function PrivateRoute ({ component: Component, ...rest }) {
  const { user } = useContext(Context)
  const isAuthenticated = () => {
    console.log(user.role)
    return !!user.role
  }

  return (

    <Route
      {...rest} render={(props) => (
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <h1>fuck</h1>
          // <Redirect to='/login' />
        )
      )}
    />
  )
}
