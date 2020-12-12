import React, { useEffect, useState } from 'react'
import Explore  from './components/Explore'
import Result from './components/Result'
import Search from './components/Search'

const App = () => {
  const [emojis, setEmojis] = useState([])
  const [query,setQuery] = useState('')
  const [results,setResults] = useState([])
  

  const fetchEmoji = async () => {
    let emojiDataJSON = window.localStorage.getItem('emojiData')
    if (emojiDataJSON) {
      return JSON.parse(emojiDataJSON)
    } else {
      let response = await fetch('https://radiant-precept-290311-default-rtdb.firebaseio.com/api/emojis.json')
      let data = await response.json()
      window.localStorage.setItem('emojiData', JSON.stringify(data))
      return data
    }
  }

  useEffect(() => {
      fetchEmoji().then(data => setEmojis(data))
  }, [])

  

  const handleQueryChange = (e) => {
    setQuery(e.target.value)
    handleResults(query)
  }

  const handleResults = (query) => {
    let regex = new RegExp(query,'gi')
    let filteredArray = emojis.filter(e=>regex.test(e.unicodeName))
    setResults(filteredArray)
  }

  return (
    <div>
      <div>Header</div>
      <Search
      query={query}
      handleChange={handleQueryChange}/>
      <Result 
      results={results}
      query={query}/>
      <Explore 
      emojis={emojis}/>
      <div>footer</div>
    </div >
  )
}

export default App