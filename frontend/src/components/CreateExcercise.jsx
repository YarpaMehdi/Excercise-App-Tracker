import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

const CreateExcercise = () => {
const[name , setName] = useState('')
const[discription , setDiscription] = useState('')
const[activity , setActivity] = useState('')
const[duration , setDuration] = useState('')
const[date , setDate] = useState('')
const navigate = useNavigate();

const createNote = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:5000/notes',{
        name,
        discription,
        activity,
        duration,
        date
    },{headers:{


        "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNvbnRvdXIyQGdtYWlsLmNvbSIsImlkIjoiNjNjYmJkMzg4OGQ0ZjhjZjU4ZTgyZjRmIiwiaWF0IjoxNjc0Mjk2NjMyfQ.i0pSKv0hS3Xw6GI83El5D8ltFZgxFs-PpbXVDRtACFQ"



    }})
    .then((response) =>{
        console.log(response)
        navigate('/allexercises')
        console.log(name)
        console.log(discription)
        console.log(activity)
        console.log(duration)
        console.log(date)
    })
    .catch((error) =>{
        console.log(error)
    })

}

  return (
    <>
    <Header />
    <div className='container'>
        <div className="card_box">
            <form onSubmit={createNote}>

                <div className="field_box">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter Your Name' value={name} onChange={(e) =>setName(e.target.value)}/>
                </div>
                <div className="field_box">
                    <label htmlFor="">Discription</label>
                    <input type="text" placeholder='Discription' value={discription} onChange={(e) =>setDiscription(e.target.value)}/>
                </div>
                <div className="field_box">
                    <label htmlFor="">Activity</label>
                    <select value={activity} onChange={(e) =>setActivity(e.target.value)}>
                        <option value="Activity">Activity</option>
                        <option value="Run">Run</option>
                        <option value="Swim">Swim</option>
                        <option value="Walk">Walk</option>
                        <option value="Hike">Hike</option>
                    </select>
                </div>
                <div className="field_box">
                    <label htmlFor="">Duration</label>
                    <input type="text" placeholder='Duration' value={duration} onChange={(e) =>setDuration(e.target.value)}/>
                </div>
                <div className="field_box">
                    <label htmlFor="">Date</label>
                    <input type="date" name="" id=""  value={date} onChange={(e) =>setDate(e.target.value)}/>
                </div>

                <button type='submit' className='btn btn-primary'>Create</button>
            </form>

            {/* {name}<br />
            {discription}<br />
            {activity}<br />
            {duration}<br />
            {date}<br /> */}
        </div>
    </div>
    </>
  )
}

export default CreateExcercise