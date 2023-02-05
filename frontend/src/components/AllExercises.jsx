import React from 'react'
import Header from './Header'

const AllExercises = () => {
  return (
    <>
    <Header />
        <div className="all_exercise_box">
            <div className="container">
                <table className='table table-hover table-striped'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Discription</th>
                            <th>Activity</th>
                            <th>Duration</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Name</td>
                            <td>Discription</td>
                            <td>Activity</td>
                            <td>Duration</td>
                            <td>Date</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default AllExercises