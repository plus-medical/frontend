import React from 'react'
import { Provider } from './Auth/Context'
import { AppRoute } from './components/AppRoute'

export const App = () => {
  // const existUser = JSON.parse(window.sessionStorage.getItem('tokens'))
  // const [authUser, setAuthUser] = useState(existUser)
  // const setTokens = (data) => {
  //   window.sessionStorage.setItem('tokens', JSON.stringify(data))
  //   setAuthUser(data)
  // }

  return (
    // <Provider value={{ authUser, setAuthTokens: setTokens }}>
    <Provider>
      <AppRoute />
    </Provider>
  )
}
