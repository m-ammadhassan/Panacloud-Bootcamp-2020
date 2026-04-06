import React, {useContext} from 'react'
import myContext from '../context/myContext'

const GrandChild = () => {
  let message = useContext(myContext);
  return (
    <div>
      <div>{message[0] ? 'Good Morning' : 'Good Night'} from Grand Child</div>
      <button onClick={() => {message[1](!message[0])}}>Click Me and See Magic</button>
    </div>
  )
}

export default GrandChild