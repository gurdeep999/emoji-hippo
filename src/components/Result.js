import React, { useEffect, useState } from 'react'
import ResultCard from './ResultCard'

const Result = ({ emojis, query, handleDetails }) => {
  const [results, setResults] = useState([])

  useEffect(() => {
    if (query) {
      let regex = new RegExp(query, 'gi')
      if ((query[0] >= 'a' && query[0] <= 'z') || (query[0] >= 'A' && query[0] <= 'Z')) {
        let filteredArray = emojis.filter(e => regex.test(e.unicodeName))
        setResults(filteredArray)
      } else {
        let filteredArray = [].concat(emojis.find(e => regex.test(e.character)))
        if (filteredArray[0]) {
          setResults(filteredArray)
        }
      }
    }
  }, [query, emojis])


  return query
    ? results.length
      ? (
        <>
          <p>{results.length} results found.</p>
          <div className="container__result">
            {results.map(r => (
              <ResultCard
                key={r.codePoint}
                result={r}
                handleDetails={handleDetails}
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