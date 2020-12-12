import React from 'react'

const ResultCard = ({ result }) => {
  return (
    <div className="result-card">
      <div className="result-character">{result.character}</div>
      <div>{result.unicodeName}</div>
      <div>{result.codePoint}</div>
    </div>
  )
}

export default ResultCard