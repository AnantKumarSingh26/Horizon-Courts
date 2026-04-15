import React from 'react'

const Services = () => {
    return (
        <div className="services">
            <div className="leftServices">
                <button>Services</button>
                <p>Explore our full range of coaching, training, and experiences. From first server to match point - we've hot the right program for you.</p>
                <button>Explore More <i class="ri-arrow-right-up-long-line"></i></button>
            </div>
            <div className="midServices">
                <button className='glass-button'>Training Programs</button>
                <div className='midServices-bottom'>
                    <h5>Programs designed for all ages and abilities.</h5>
                    <i class="ri-arrow-right-up-long-line"></i>
                </div>
            </div>
            <div className="rightServices">
                <div className="rightServicesimg">
                    <button className='glass-button'>Court Access</button>
                    <h5>Hourly Court Rental</h5>
                </div>
                <div className='lastDiv'>
                    Step into a space built for players - to grow, compete, and thrive. <br />
                     <i class="ri-arrow-left-long-line"></i>
                    <i class="ri-arrow-right-long-line"></i>
                </div>
              
            </div>
        </div>
    )
}

export default Services