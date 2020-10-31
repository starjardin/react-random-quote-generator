import React from 'react'
import QuotesGenerator from './QuotesGenerator'
import QuotesGeneratedByAuthor from './QuotesGeneratedByAuthor'
import QuotesByGenre from './QuotesByGenre'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


export default function App () {
  return (
    <Router>
      <Switch>
        <Route path="/authors/:authorName">
          <QuotesGeneratedByAuthor />
        </Route>
        <Route path="/genres/:genreName">
          <QuotesByGenre />
        </Route>
        <Route path="/">
          <QuotesGenerator />
        </Route>
      </Switch>
    </Router>
  )
}