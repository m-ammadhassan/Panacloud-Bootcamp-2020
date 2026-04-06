import React from 'react'
import { useReducer } from 'react'
import myReducer from '../reducers/myReducer'

const Number = () => {
    const [state, dispatch] = useReducer(myReducer, 0)
    return (
        <div>
            <div><strong>Current Number is: </strong> {state}</div>
            <button onClick={() => {dispatch({type: "INCREMENT"})}}>Increment</button>
            <button onClick={() => {dispatch({type: "DECREMENT"})}}>Decrement</button>
        </div>
    )
}

export default Number