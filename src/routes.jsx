import React from 'react'
import { Route } from 'react-router-dom'
import { SomePage } from './containers'
import { Home } from './components'

const Routes = () => (
  <>
    <Route exact path="/" component={Home} />
    <Route exact path="/some-page" component={SomePage} />
  </>
)

export default Routes
