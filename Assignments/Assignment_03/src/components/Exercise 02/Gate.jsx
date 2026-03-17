import React from 'react'

const Gate = ({isOpen}) => {
  return (
    // Make a component called Gate that accepts 1 prop called “isOpen”. 
    // When isOpen is true, make the component render “open”, and 
    // when isOpen is false, make it render “closed”. 
    // Hint: you can do conditional logic inside JSX with the ternary (question mark, ?) operator, inside single braces, 
    // like this: {speed > 80 ? "danger!" : "probably fine"} (which evaluates to “danger!” if speed is over 80, and “probably fine” otherwise).
    <div>
        <h4>Gate:</h4>
        {isOpen ? "Open": "Closed"}
    </div>
  )
}

export default Gate