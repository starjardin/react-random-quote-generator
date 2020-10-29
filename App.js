import React from 'react'
import QuotesGenerator from './QuotesGenerator'
import QuotesGeneratedByAuthor from './QuotesGeneratedByAuthor'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


export default function App () {
  return (
    <Router>
      <Switch>
        <Route path="/author/:name">
          <QuotesGeneratedByAuthor />
        </Route>
        <Route path="/">
          <QuotesGenerator />
        </Route>
      </Switch>
    </Router>
  )
}