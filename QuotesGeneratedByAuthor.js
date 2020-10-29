import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const AUTHOR_URL = 'https://quote-garden.herokuapp.com/api/v2/authors/buddha?'

const maxPages = "page=1&limit=10"

export default function QuotesGeneratedByAuthor () {
  const authorName = useParams()
  async function generateQoutesByAthor () {
    const res = await fetch('https://quote-garden.herokuapp.com/api/v2/authors/neal?page=1&limit=10')
    const data = await res.json()
    console.log(data);
  }
   return (
     <div>Hello world</div>
   )
}