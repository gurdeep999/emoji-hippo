import React from 'react'

const EmojiDetailPage = ({ detail }) => {
  return (
    <div className="detail">
      <div className="detail__character">{detail.character}</div>
      <p className="detail__name">
        <span className="detail__name-label">
          Name:
          </span>
        <span className="detail__name-data">{detail.unicodeName}
        </span>
      </p>
      <p className="detail__code">
        <span className="detail__code-label">
          Unicode:
          </span>
        <span className="detail__code-data">
          {detail.codePoint}
        </span>
      </p>
    </div>
  )
}
export default EmojiDetailPage