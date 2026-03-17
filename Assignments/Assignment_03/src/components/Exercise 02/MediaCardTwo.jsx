import React from 'react'

const MediaCardTwo = ({title, body, imageURL, jsx}) => {
  return (
    // Render the MediaCard with the ReactDOM.render call, and pass in the necessary props. 
    // Can you pass a JSX element as a prop value? (hint: wrap it in single braces). 
    // Try bolding some parts of the body text without changing the implementation of MediaCard.
    <div className="media-card">
        <h2>{title}</h2>
        <p>{body}{jsx}</p>
        <img src={imageURL} alt="" />
    </div>
  )
}

export default MediaCardTwo