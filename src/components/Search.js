import React from 'react'
import Typewriter from 'typewriter-effect'

const Search = ({ query, handleChange }) => {

  return (
    <h1 className="search">
      <span>What Emoji is</span>
      <label className="search__label">
        <span>
        {!query
          // ? <Typewriter
          //   options={{
          //     strings: ['enter','emoji','or','text'],
          //     autoStart: true,
          //     loop: true,
          //     delay: 'natural',
          //     deleteSpeed: 'natural',
          //     pauseFor: 500
          //   }} />
          ? <Typewriter 
          options={{
                autoStart: true,
                loop: true,
                delay: 'natural',
                deleteSpeed: 'natural'
              }}
          onInit={(typewriter) => {
            typewriter.typeString('enter')
            .pauseFor(300)
            .deleteAll()
            .typeString('emoji <span>&#x1F60E;</span>')
            .pauseFor(300)
            .deleteAll()
            .typeString('or')
            .pauseFor(300)
            .deleteAll()
            .typeString('text')
            .pauseFor(300)
            .start()
          }}
          />
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