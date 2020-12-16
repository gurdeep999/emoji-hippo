import React, { useEffect, useState } from 'react'
import EmojiDetailPage from './components/EmojiDetailPage'
import Explore from './components/Explore'
import Result from './components/Result'
import Search from './components/Search'


const App = () => {
  const [emojis, setEmojis] = useState([])
  const [query, setQuery] = useState('')
  const [detail, setDetail] = useState('')


  const fetchEmoji = async () => {
    try {
      let emojiDataJSON = window.localStorage.getItem('emojiData')
      if (emojiDataJSON) {
        return JSON.parse(emojiDataJSON)
      } else {
      let response = await fetch("/.netlify/functions/getemojis")
      let data = await response.json()
      window.localStorage.setItem('emojiData', JSON.stringify(data))
      return data
      }
    } catch (err) {
      console.log(err.body)
    }
  }

  useEffect(() => {
    fetchEmoji().then(data => {
      setEmojis(data)
      document.querySelector('.loader-wrapper').style.display = 'none'
    })

  }, [])



  const handleQueryChange = (e) => {
    setQuery(e.target.value)
    setDetail('')

  }

  const handleDetails = (e) => {
    setDetail(e)
  }

  const handleRedirect = () => {
    setQuery('')
    setDetail('')
  }

  return (
    <div className="container">
      <nav className="nav">
        <h2
          className="nav__brand"
          onClick={handleRedirect}>
          Emoji
            <span className="nav__brand--mod">
            Hippo
              </span>
        </h2>
        <div className="nav__links">
          <div
            className="nav__links-item"
            onClick={handleRedirect}>
            <div
              className="nav__links-item--nostyle"
            >HOME</div>
          </div>
          <div className="nav__links-item">
            <a
              className="nav__links-item--nostyle"
              href="https://github.com/gurdeepsinghsaini/emoji-hippo"
              rel="noreferrer"
              arget="_blank">GITHUB</a>
          </div>
        </div>
      </nav>
      <div className="container__main">
        <Search
          query={query}
          handleChange={handleQueryChange} />
        <div className="loader-wrapper">
          <div className="loader">Loading...</div>
        </div>
        <div className="main__content">

          {detail
            ? <EmojiDetailPage
              detail={detail} />
            : query
              ? (
                <Result
                  query={query}
                  emojis={emojis}
                  handleDetails={handleDetails} />
              )
              : (
                <Explore
                  emojis={emojis}
                  handleDetails={handleDetails} />
              )
          }


        </div>
      </div>

      <div className="container__footer"><div>Made with ❤️ by <a href="https://gurdeepsingh.netlify.app/">gurdeepsingh</a></div></div>
    </div >
  )
}

export default App