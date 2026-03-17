import React from 'react'
import Task01 from './Task01'
import Task02 from './Task02'
import Task03 from './Task03'
import Task04 from './Task04'
import Task05 from './Task05'

const Exercise01 = () => {
  return (
    <div>
        <table>
            <tr>
                <th>Exercise 01 Tasks</th>
            </tr>
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
            <tr>
                <td>Task 04</td>
                <td><Task04 /></td>
            </tr>
            <tr>
                <td>Task 05</td>
                <td><Task05 /></td>
            </tr>
        </table>
    </div>
  )
}

export default Exercise01