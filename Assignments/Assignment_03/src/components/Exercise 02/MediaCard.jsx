import React from 'react'

const MediaCard = ({title, body, imageURL}) => {
  return (
    // Write a new component called MediaCard that accepts 3 props: title, body, and imageUrl. 
    // Inside the component, render the title in an <h2> tag, the body in a <p> tag, and pass the imageUrl into an img tag like <img src={imageUrl}/>. 
    // Can you return all 3 of these things at once? 
    // Or do you need to wrap them in another element?
    <div>
        <h2>{title}</h2>
        <p>{body}</p>
        <img src={imageURL} alt="" />
    </div>
  )
}

export default MediaCard