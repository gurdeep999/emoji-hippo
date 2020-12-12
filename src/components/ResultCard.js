import React from 'react'

const ResultCard = ({ result }) => {
  return (
    <div className="result-card">
      <div className="result-character">{result.character}</div>
      <div className="result-name">{result.unicodeName}</div>
      <div className="result-code">{result.codePoint}</div>
    </div>
  )
}

export default ResultCard