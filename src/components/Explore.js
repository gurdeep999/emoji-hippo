import React, { useState } from 'react'
import utils from '../utils/utilities'

const Explore = ({ emojis }) => {
  const [counter, setCounter] = useState(0)
  const [exploreEmoji, setExploreEmoji] = useState([])
  const [visible, setVisible] = useState(false)

  const handleExplore = () => {
    let t = emojis.slice(counter, counter + 100)
    let newSet = exploreEmoji.concat(utils.shuffle(t))
    setExploreEmoji(newSet)
    handleCounterChange()
  }

  const handleCounterChange = () => {
    let newCounter = counter + 100
    setCounter(newCounter)
  }

  if(counter >= 2694) {
    document.querySelector('#explore-more').style.display = 'none'
  }

  if (!visible) {
    return (
      <button
        className="explore"
        onClick={() => {
          setVisible(true)
          handleExplore()
        }}>
        Explore
      </button>
    )
  } else {
    return (
      <div>

        <div className="emoji-list container-grid">
          {
            exploreEmoji.map(emoji => {
              const codePoint = emoji.codePoint

              return (
                <span
                  className="emoji-list-item"
                  key={emoji.id + codePoint}>
                  {emoji.character}
                </span>
              )
            })
          }
        </div>
        <button
          id="explore-more"
          className="explore"
          onClick={handleExplore}>Explore More</button>
      </div>
    )
  }
}

export default Explore