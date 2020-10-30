import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const AUTHOR_URL = 'https://quote-garden.herokuapp.com/api/v2/authors/'
const maxPages = "?page=1&limit=10"

export default function QuotesGeneratedByAuthor () {
  const { authorName } = useParams()
  const [quotesByAuthor, setQuotesByAuthor] = useState([])
  
  async function generateQoutesByAthor () {
    const res = await fetch(AUTHOR_URL + authorName + maxPages)
    const data = await res.json()
    setQuotesByAuthor(data)
  }


  useEffect (() => {
    generateQoutesByAthor()
  }, [])

  if (!quotesByAuthor.quotes) return null
  console.log(authorName);

   return (
     <>
      <Link to="/">
        back
      </Link>
      <h2 className="author">{authorName}</h2>
        <ul>
          {quotesByAuthor.quotes.map(quote => <li key={quote._id}>{quote.quoteText}</li>)}
        </ul>
     </>
   )
}