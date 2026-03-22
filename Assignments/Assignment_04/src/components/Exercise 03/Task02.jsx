import React, {useState} from 'react'

const Task02 = () => {
    // Add another piece of state: the room temperature. 
    // (Hint: you can call useState more than once!) 
    // Initialize it to 72 (or 22 for you Celsius types). 
    // Display the current temperature under the light status.

    const [light, setLight] = useState(true);
    const [temperature, setTemperature] = useState(22)

    return (
        <div className={`room-card ${light ? "room-light-on" : "room-light-off"} flex`}>
            <div>
                <h4>Light is: </h4>
                <span>{light ? "ON" : "OFF"}</span>
                <br />
                <h4>Current Temperature: </h4>
                <span>{temperature} °C</span>
            </div>

            <div className="room-buttons">
                <button className="room-button" onClick={() => {setLight(true); setTemperature(22)}}>ON</button>
                <button className="room-button" onClick={() => {setLight(false); setTemperature(12)}}>OFF</button>
            </div>
        </div>
    )
}

export default Task02