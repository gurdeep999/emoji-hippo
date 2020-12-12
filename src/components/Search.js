import React from 'react'

const Search = ({query,handleChange}) => {
 
  
  return (
    <div>
      <input 
      value={query} 
      onChange={handleChange}></input>
    </div>
  )
}

export default Search