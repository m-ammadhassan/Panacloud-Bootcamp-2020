import React from 'react'
import MediaCard from './MediaCard'
import MediaCardTwo from './MediaCardTwo'
import Gate from './Gate'

const Exercise02 = () => {
  return (
    <div>
      <table>
        <tr>
          <th>Exercise 02 Tasks</th>
        </tr>
        <tr>
          <td>Task 01</td>
          <td><MediaCard title="" body="" imageURL="" /></td>
        </tr>
        <tr>
          <td>Task 02</td>
          <td><MediaCardTwo title="" body="" imageURL="" jsx={5} /></td>
        </tr>
        <tr>
          <td>Task 03</td>
          <td>
            <Gate isOpen={true} />
            {/* <Gate isOpen={false} /> */}
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Exercise02