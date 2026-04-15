import React from 'react'
import './style/home.css'

const Nav = () => {
  return (
    <div className="fullNav">
        <div className="logo">
            Horizon Courts
        </div>
        <div className="options">
            <p>About Us</p>
            <p>Services</p>
            <p>Coaches</p>
            <p>Events</p>
            <p>Contacts</p>
        </div>
        <div className="button">
            <button>Book now <i class="ri-arrow-right-up-long-line"></i></button>
        </div>
    </div>
  )
}

export default Nav