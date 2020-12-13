import React, { useEffect, useState } from 'react'
import utils from '../utils/utilities'

const Explore = ({ emojis, handleDetails }) => {
  const [counter, setCounter] = useState(50)
  const [shuffledEmoji, setShuffledEmoji] = useState([])

  useEffect(() => {
    let shuffledArray = utils.shuffle(emojis)
    setShuffledEmoji(shuffledArray)
  },[emojis])

  const handleChange = () => {
    let newCounter = counter + 50
    setCounter(newCounter)
  }

  if (counter >= 151) {
    document.querySelector('.explore__btn').style.display = 'none'
  }


  return (
    <div className="explore">

      <div className="explore__emoji-list">
        {
          shuffledEmoji.slice(0,counter).map(emoji => {
            const codePoint = emoji.codePoint

            return (
              <span
                className="emoji-list__item"
                key={emoji.id + codePoint}
                aria-label={emoji.unicodeName}
                onClick={() => handleDetails(emoji)}>
                {emoji.character}
              </span>
            )
          })
        }
      </div>
      <button
        className="explore__btn"
        onClick={handleChange}>Explore More</button>
    </div>
  )
}


export default Explore