import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const API_URL = 'https://quote-garden.herokuapp.com/api/v2/quotes/random'

export default function QuotesGenerator () {
  const [quotes , setQuotes] = useState({})

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

  
  return (
    <>
      {!quotes.quote 
        ? <h2>Loading ....</h2>
        : <div className="quote-container">
          <button
            className="refresh" 
            onClick={generateQoutes}
          >random</button>
          <h4 className="random-quote">{quotes.quote.quoteText}</h4>
          <Link to={`/authors/${quotes.quote.quoteAuthor}`}>
            <button
              className="btn--author"
            >
              <span className="author--name">{quotes.quote.quoteAuthor}</span>
              <span className="quote--genre">{quotes.quote.quoteGenre}</span>
            </button>
          </Link>
          <Link to={`/genres/${quotes.quote.quoteGenre}`}>
            <button>{quotes.quote.quoteGenre}</button>
          </Link>
        </div>
      }
    </>
  )
}