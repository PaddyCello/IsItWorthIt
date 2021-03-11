import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import CountryIndex from './components/CountryIndex'
import CountryCard from './components/CountryCard'


function App() {


  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <CountryIndex />
          </Route>
          <Route path='/:id'>
            <CountryCard />
          </Route>
        </Switch>
      </BrowserRouter>

    </>
  )
}

export default App
