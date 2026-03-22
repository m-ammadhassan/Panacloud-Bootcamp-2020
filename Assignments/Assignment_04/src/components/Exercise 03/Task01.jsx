import React, {useState} from 'react'

const Task01 = () => {
    // Add 2 more buttons: “ON” and “OFF”. 
    // Turn the light either ON or OFF depending on which 
    // button is clicked by wiring up the onClick handlers to set the state.

    const [light, setLight] = useState(true);

    return (
        <div className={`room-card ${light ? "room-light-on" : "room-light-off"} flex`}>
            <div>
                <h4>Light is: </h4>
                <span>{light ? "ON" : "OFF"}</span>
            </div>

            <div className="room-buttons">
                <button className="room-button" onClick={() => {setLight(true)}}>ON</button>
                <button className="room-button" onClick={() => {setLight(false)}}>OFF</button>
            </div>
        </div>
  )
}

export default Task01