import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Solid from '@fortawesome/fontawesome-free-solid'
// import * as Brands from '@fortawesome/free-brands-svg-icons'
import './style.css'

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1 className="name">
                    <p><FontAwesomeIcon icon={Solid.faTerminal} /> Helder Pereira</p>
                </h1>
               <h1 className="name">
                    <p><FontAwesomeIcon icon={Solid.faLaptop} /> Software Developer</p>
                </h1>
                 {/* <h1 className="name">
                    <p><FontAwesomeIcon icon={Solid.faUniversity} /> Computer Engineer</p>
                </h1> */}
                <h1 className="name">
                    <p> Turning <FontAwesomeIcon icon={Solid.faCoffee} /> into <FontAwesomeIcon className="spaceIcons" icon={Solid.faCode} /> </p>
                </h1>
 
  
                {/* <Link to="/about">
                    <button>More Info</button>
                </Link> */}
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
