import React, {useState} from 'react'

const Task03 = () => {
    // Add 2 more buttons: “+” and “-”. 
    // Then add onClick handlers that will increase or decrease 
    // the temperature by 1 degree when clicked,

    const [light, setLight] = useState(true);
    const [temperature, setTemperature] = useState(22)

    return (
        <div className={`room-card ${light ? "room-light-on" : "room-light-off"}`}>
            <div className="light-card flex">
                <div>
                    <h4>Light is: </h4>
                    <span>{light ? "ON" : "OFF"}</span>
                </div>

                <div className="room-buttons">
                    <button className="room-button" onClick={() => {setLight(true); setTemperature(22)}}>ON</button>
                    <button className="room-button" onClick={() => {setLight(false); setTemperature(12)}}>OFF</button>
                </div>
            </div>

            <div className="temperature-card flex">
                <div>
                    <h4>Current Temperature: </h4>
                    <span>{temperature} °C</span>
                </div>

                <div className="room-buttons">
                    <button className="room-button" onClick={() => {setTemperature(temperature + 1)}}>+</button>
                    <button className="room-button" onClick={() => {setTemperature(temperature - 1)}}>-</button>
                </div>
            </div>            
        </div>
    )
}

export default Task03