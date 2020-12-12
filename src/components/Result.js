import React, { useEffect, useState } from 'react'
import ResultCard from './ResultCard'

const Result = ({ emojis, query }) => {
  const [results, setResults] = useState([])

  useEffect(() => {
    let regex = new RegExp(query, 'gi')
    let filteredArray = emojis.filter(e => regex.test(e.unicodeName))
    setResults(filteredArray)
  }, [query, emojis])


  return query
    ? results.length
      ? (
        <>
          <p>{results.length} results found.</p>
          <div>
            {results.map(r => (
              <ResultCard
                key={r.codePoint}
                result={r}
              />
            ))}
          </div>
        </>)
      : (
        <p> No results found. Try entering a specific text or emoji</p>
      )
    :
    (
      <p>click any emoji to find more about it</p>
    )
}

export default Result