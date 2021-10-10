import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1 className="name">
                    <p>I'm Helder Pereira</p>
                    <p>Computer Engineer</p>
                </h1>
                <Link to="/about">
                    <button>More Info</button>
                </Link>
            </div>
            <div className="person">
                <img className="profilePicture filtered"
                    src={`${process.env.PUBLIC_URL}/my-logo.jpg`}
                    alt="person"
                    />
            </div>
        </div>
    )
}

export default Home
