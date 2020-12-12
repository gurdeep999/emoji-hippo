import React, { useState } from 'react'
import ResultCard from './ResultCard'

const Result = ({results,query}) => {
  console.log(results)


  return (
    <div>Sorry! no results found {results.length} </div>
  )
}

export default Result