import React from 'react'
import Planet from './Planet'
import planetsData from '../data/planetsData.json'

const Planets = () => {
  return (
    <div className="planets-section text padding">
        <h2 className="planets-section-title">The Solar Explorer Hub</h2>
        <div className="planets-section-body">
          {
            planetsData.map((planet, id)=>(
                <Planet key={id} name={planet.planetName} moons={planet.planetMoons} fact={planet.planetFact} color={planet.planetColor} image={planet.planetImage} />
            ))
          }
        </div>
    </div>
    
  )
}

export default Planets