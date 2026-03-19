import React from 'react'

const Planet = ({name, moons, color, fact, image}) => {
  return (
    <div className="planet-card" style={{borderColor: `${color}`}}>
        <h3 style={{color: `${color}`}}>{name}</h3>
        <h4>No. of Moons: <span>{moons}</span></h4>
        <img src={image} alt="" />
        <p>{fact}</p>
    </div>
  )
}

export default Planet