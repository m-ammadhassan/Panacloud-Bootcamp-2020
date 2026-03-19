import React from 'react'
import MediaCard from './MediaCard'
import MediaCardTwo from './MediaCardTwo'
import Gate from './Gate'
import MediaCardImage from '../../assets/MediaCardImage.jpg'
import MediaCardTwoImage from '../../assets/MediaCardImageTwo.jpg'

const Exercise02 = () => {
  return (
    <div className="exercise-section exercise-section-02 padding">
      <table className="exercise-table">
        <thead>
          <tr>
            <th colSpan={2}>
              <a href="https://daveceddia.com/react-getting-started-tutorial/" target="_self">Daveceddia Exercise 02 Tasks Solution</a>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Task 01</td>
            <td><MediaCard title="Late Night Code Love" body="Programming is a passion and love with code to build logics and deal with bugs!" imageURL={MediaCardImage} /></td>
          </tr>
          <tr>
            <td>Task 02</td>
            <td><MediaCardTwo title="JSON Magic with the Map" body="The informative JSON objects can be mapped magically with ease which beautifies the code." imageURL={MediaCardTwoImage} jsx={<strong>Wonderful JSX from props!</strong>} /></td>
          </tr>
          <tr>
            <td>Task 03</td>
            <td>
              <Gate isOpen={true} />
              {/* <Gate isOpen={false} /> */}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Exercise02