import React from 'react'
import './style/home.css'
const About = () => {
    return (
        <div className="about">
            <div className="topLeftAbout">
                <button>About Horizon</button>
            </div>
            <div className="topRightAbout">
                <p>At Horizon, we don't just play tennis - we live it. Since 2021, our club has been a home for players of all levels, from eager beginners to seasoned pros.</p>
            </div>
            <div className="midLeft">
                <img src="src\assets\tennis.png" alt="tennis logo" />
                <p>Professional hard courts <span>with tournament-grade lighting & climate control - play in </span>perfect conditions, in any season.</p>
                <div className="tennisBottom">
                    <div className="toggle">
                        <i className="ri-record-circle-line"></i>
                    </div>
                    Game Mode
                </div>
            </div>
            <div className="midMid">
                <div className="midBtn">Private & Group Lessons</div>
            </div>
            <div className="midRight">
                <div className="midRightTop">
                    <p>100+</p>
                    <p>Pro Coaches</p>
                    <p>Certified professionals ready to boost your game from first serve to tournament level.</p>
                </div>
                <div className="midRightBottom">
                    <div className="levels">
                        <p>Beginner</p>
                        <p>Intermediate</p>
                        <p>Advanced</p>
                    </div>
                    <div className="stars">
                        <i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i> <br /><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i> <br /><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i>
                    </div>
                    <div className="marks">55 <br />40 <br />35</div>
                </div>
            </div>
            <div className="bottomAbout">
                <div className="bottomTop">
                    <h5>A few more facts about use in numbers</h5>
                    <div className="bottomDown">
                        <div>
                            <h4>12 000+</h4>
                            <p>Hours of play annually</p>
                        </div>
                        <div>
                            <h4>89%</h4>
                            <p>Player Retention Rate</p>
                        </div>
                        <div>
                            <h4>1,200+</h4>
                            <p>Active Members</p>
                        </div>
                        <div>
                            <h4>125+</h4>
                            <p>Annual Tournaments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About