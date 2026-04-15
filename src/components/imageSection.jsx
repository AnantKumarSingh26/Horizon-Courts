import React from 'react'
import './style/home.css'

const ImageSection = () => {
    return (
        <div class="imageSection">
            <div class="top">
                <h1>Unleash Your Inner Champion Today. <br /> All In One Place.</h1>
                <p>Join the ultimate tennis experience - where passion meets performance, <br /> and every swing brings you closer to victory.</p>
                <button>Start your own journey</button>
            </div>
            <div class="leftBottom">
                <div className="lText">
                    Train with real professionals. <br />Get the real results.
                </div>
                <div className="img">
                        <img src="https://images.pexels.com/photos/7752805/pexels-photo-7752805.jpeg" alt="" />
                        <img src="https://images.pexels.com/photos/33970123/pexels-photo-33970123.jpeg" alt="" />
                        <img src="https://images.pexels.com/photos/3173279/pexels-photo-3173279.jpeg" alt="" />
                </div>
            </div>
            <div class="rightBottom">
                <button><span>Instagram </span><i class="ri-arrow-right-up-long-line"></i></button>
                <button><span>Facebook</span> <i class="ri-arrow-right-up-long-line"></i></button>
                <button><span>Tik Tok</span> <i class="ri-arrow-right-up-long-line"></i></button>
            </div>
        </div>
    )
}

export default ImageSection