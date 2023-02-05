import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="left_header">
                            <div className="brand_logo">
                                <Link>Exercises Tracker</Link>
                            </div>
                            <ul className="menu">
                                <li><Link to={'/allexercises'}>All Excercise</Link></li>
                                <li><Link to={'/createexcercise'}>Create Excercise</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 text-end">
                        <h3>User Name</h3>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header