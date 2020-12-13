import React from 'react'

const ResultCard = ({ result,handleDetails }) => {
  return (
    <div className="result-card" onClick={()=> handleDetails(result)}>
      <div className="result-character">{result.character}</div>
      <div className="result-name">{result.unicodeName}</div>
      <div className="result-code">{result.codePoint}</div>
    </div>
  )
}

export default ResultCard