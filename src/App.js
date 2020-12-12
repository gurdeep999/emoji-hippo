import React, { useEffect, useState } from 'react'
import Explore from './components/Explore'
import Result from './components/Result'
import Search from './components/Search'

const App = () => {
  const [emojis, setEmojis] = useState([])
  const [query, setQuery] = useState('')


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

  }


  return (
    <div className="container">
      <nav className="nav">
        <h2 className="nav__brand">emoji<span className="nav__brand--mod">Hippo</span></h2>
        <div className="nav__links">
          <div className="nav__links-item">HOME</div>
          <div className="nav__links-item">GITHUB</div>
        </div>
      </nav>
      <div className="container__main">
        <Search
          query={query}
          handleChange={handleQueryChange} />
        <div className="main__content">
          <Result
            query={query}
            emojis={emojis} />
          {query
            ? ''
            : (
              <Explore
                emojis={emojis} />
            )
          }
        </div>
      </div>

      <div className="container__footer"><div>Made with ❤️ by <a href="https://gurdeepsingh.netlify.app/">gurdeepsingh</a></div></div>
    </div >
  )
}

export default App