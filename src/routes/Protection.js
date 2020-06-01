import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { AuthContext } from '../utils/Auth/AuthContext'

const Protection = ({ component: Component, ...rest }) => {
  const { authenticated } = useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={(props) => {
        if (authenticated) {
          return <Component {...rest} {...props} />
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location
                }
              }}
            />
          )
        }
      }}
    />
  )
}

export default Protection
