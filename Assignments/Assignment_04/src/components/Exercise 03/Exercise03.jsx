import React from 'react'
import Task01 from './Task01'
import Task02 from './Task02'
import Task03 from './Task03'

const Exercise03 = () => {
  return (
    <div className="exercise-section exercise-section-03 padding">
        <table className="exercise-table">
            <thead>
                <tr>
                    <th colSpan={2}>
                        <a href="https://daveceddia.com/react-getting-started-tutorial/" target="_self">Daveceddia Exercise 03 Tasks Solution</a>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Task 01</td>
                    <td><Task01 /></td>
                </tr>
                <tr>
                    <td>Task 02</td>
                    <td><Task02 /></td>
                </tr>
                <tr>
                    <td>Task 03</td>
                    <td><Task03 /></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Exercise03