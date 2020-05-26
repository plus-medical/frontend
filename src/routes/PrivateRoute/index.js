import React, { useContext } from 'react'
import { Route } from 'react-router-dom'
import { AuthContext } from '../../utils/context/authContext'

export function PrivateRoute ({ component: Component, ...rest }) {
  const { user } = useContext(AuthContext)
  const isAuthenticated = () => {
    console.log(user.role)
    return !!user.role
  }

  return (

    <Route {...rest} render={(props) => <Component {...props} />} />

  // <Route
  //   {...rest} render={(props) => (
  //     isAuthenticated() ? (
  //       <Component {...props} />
  //     ) : (
  //       <h1>Unicornio</h1>
  //       <Redirect to='/login' />
  //     )
  //   )}
  // />
  )
}
