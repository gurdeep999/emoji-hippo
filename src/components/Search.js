import React from 'react'
import Typewriter from 'typewriter-effect'

const Search = ({ query, handleChange }) => {

  return (
    <h1 className="search">
      <span>What Emoji is</span>
      <label className="search__label">
        <span>
        {!query
          ? <Typewriter
            options={{
              strings: ['enter','emoji','or','text'],
              autoStart: true,
              loop: true,
              delay: 'natural',
              deleteSpeed: 'natural',
              pauseFor: 500
            }} />
          : null}
        </span>
        <input
          className="search__label-input"
          value={query}
          onChange={handleChange}></input>
        


      </label>

      <span>?</span>
    </h1>
  )
}

export default Search