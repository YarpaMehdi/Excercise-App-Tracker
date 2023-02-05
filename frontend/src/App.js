import React from 'react'
import './App.css'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import SignUp from './components/SignUp'
import CreateExcercise from './components/CreateExcercise';
import AllExercises from './components/AllExercises';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/createexcercise' element={<CreateExcercise />}/>
          <Route path='/allexercises' element={<AllExercises />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App