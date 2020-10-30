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

  function handleClick () {
    console.log("Hello world");
  }

  // if (!quotesByAuthor.quotes) return null

   return (
     <>
      <Link to="/">
        <button className="refresh">random</button>
      </Link>
      {!quotesByAuthor.quotes 
        ? <h4 className="athour">Loading....</h4>
        : <div className="random">
            <h2 className="author">{authorName}</h2>
            <blockquote>
              {quotesByAuthor.quotes.map(quote => <q key={quote._id}>{quote.quoteText}</q>)}
            </blockquote>
          </div>
      }
     </>
   )
}