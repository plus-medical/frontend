import React from 'react'
import { Route, Redirect } from 'react-router-dom'

//, { useContext }
// import { AuthContext } from '../../utils/Auth/AuthContext'

const Protected = ({ component: Component, ...rest }) => {
  // const { authenticated } = useContext(AuthContext)
  const authenticated = false
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
                pathname: '/unauthorized',
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

export default Protected
