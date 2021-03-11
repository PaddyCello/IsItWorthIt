import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import CountryIndex from './components/CountryIndex'
import CountryCard from './components/CountryCard'
import Home from './components/Home'


function App() {


  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path ='/'>
            <Home />
          </Route>
          <Route exact path='/countries'>
            <CountryIndex />
          </Route>
          <Route path='/countries/:id'>
            <CountryCard />
          </Route>
        </Switch>
      </BrowserRouter>

    </>
  )
}

export default App
