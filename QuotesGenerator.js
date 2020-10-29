import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import QuotesGeneratedByAuthor from './QuotesGeneratedByAuthor'

const API_URL = 'https://quote-garden.herokuapp.com/api/v2/quotes/random'

export default function QuotesGenerator () {
  const [quotes, setQuotes] = useState({})

  async function fetchQuotes () {
    const res = await fetch(API_URL)
    const data = await res.json()
    setQuotes(data)
  }

  useEffect (() => {
    fetchQuotes()
  }, [])

  function generateQoutes () {
    fetchQuotes()
  }

  if (!quotes.quote) return null
  console.log(quotes.quote);
  console.log(quotes.quote.quoteAuthor);
  return (
    <>
      <button onClick={generateQoutes}>random</button>
      <h2>{quotes.quote ? quotes.quote.quoteText : "Loading..."}</h2>
      <Link to={`/authors/${quotes.quote.quoteAuthor}`}>
        <button>{quotes.quote.quoteAuthor}</button>
      </Link>
    </>
  )
}