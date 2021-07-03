
import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import HomePage from './page/HomePage'

export const useRoutes = (isAuthenticated) => {
  // for authorized user
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path='/home' component={HomePage}/>
        <Redirect to="/home"/>
      </Switch>
    )
  }

  // for guest
  return (
    <Switch>
      <Route path='/' exact>
      </Route>
      <Redirect to='/' />
    </Switch>
  )
}
