import React, { useState, useEffect } from 'react'
import {Link, useParams } from 'react-router-dom'

const API_GENRE = "https://quote-garden.herokuapp.com/api/v2/genres/"
const MAX_PAGE = "?page=1&limit=10"
export default function QuotesByAuthor () {
  const { genreName } = useParams()
  const [ quotesByGenres, setQuotesByGenres ] = useState([])

  const getQuotesByGenres = async () => {
    const res = await fetch(`${API_GENRE}${genreName}${MAX_PAGE}`)
    const data = await res.json()
    setQuotesByGenres(data.quotes)
  }

  useEffect (() => {
    getQuotesByGenres()
  }, [])

  return (
    <>
      <Link to="/">
        <button className="refresh">random</button>
      </Link>
      {!quotesByGenres 
        ? <h2>Loading....</h2>
        : <div>
            <h2 className="author">{genreName}</h2>
            <blockquote>
              {quotesByGenres.map(quote => {
                return (
                  <q key={quote._id}>{quote.quoteText}</q>
                )
              })}
          </blockquote>
        </div>
      }
    </>
  )
}