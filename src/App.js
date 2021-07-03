import {BrowserRouter as Router} from 'react-router-dom'
import {Container, Button} from '@material-ui/core'
import {useRoutes} from './router'
import React from 'react'
import './App.css'

function App() {
  const token = 'SERVER_TOKEN'
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  return (
    <div className="App">
      <Router>
        <Container>
          <Button variant="contained" color="secondary">Hello World</Button>
          {routes}
        </Container>
      </Router>
    </div>
  )
}

export default App
