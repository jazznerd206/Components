import React, { useState, useEffect } from 'react';
import GolfBall from '../public/GolfBall.png';
import Alb1 from '../public/Albatross2.jpg';
import Alb2 from '../public/Albatross3.jpg';
import scrollFunc from './utils/scroll.js';
import Write from './utils/Write.js'
import './styles.css'

function ParaLanding() {


    const [ y, sety ] = useState(0);
    const [ script, showScript ] = useState(false);

    const getYPosition = () => {
        document.addEventListener('scroll', () => {
            const yOff = window.pageYOffset;
            sety(yOff);
        });
    }

    const renderScript = (yVal) => {
        if (yVal < 100) {
            console.log('y is less than 100')
            showScript(!script)
        } 
    }

    useEffect(() => {
        getYPosition();
        console.log(y)
        scrollFunc(y);
        renderScript(y);
    }, [y   ])

    

    return (
        <div>
                
            <div className="container firstpage"  id="firstpage">
                <div className="level-one" id="level-one">
                    <div className="twinkling">
                        <h1 id="heading" className="heading">
                            {script === true && (
                                <Write />
                            )}
                        </h1>
                    </div>
                    <div className="block-one" id="block-one">
                        
                    </div>
                </div>
                {/* <div className="level-two" id="level-two">
                    <div className="block-two" id="block-two">
                        
                    </div>
                </div> */}
                {/* <div className="level-three" id="level-three">
                    <div className="block-three" id="block-three">

                    </div>
                </div> */}
            </div>    
            <div className="container secondpage" id="secondpage">
                <h1 className="heading" id="heading">
                    <span>I am a full stack web developer with a passion for modern and emerging web technologies. I believe in delivering meaningful, impactful technology paired with simple, clean code.</span>
                    <span>I am always seeking opportunities and challenges to improve myself and assist and ally with others to approach real world problems with innovative solutions. I love to contribute to open source projects, and am currently on the hunt for a full time job.</span>
                    <span>While I'm not looking for the hottest new NPM package, I love to spend time with my dogs (3!!) and sharpen my golf game.</span>
                </h1>
                <img
                    src={GolfBall}
                    className="image"
                    id="image"
                />
            </div>
            <div className="thirdpage">
                <div className="progress-line">
                </div>

                <div className="imgs">
                    <img className="img img1" src={Alb2} />
                    <img className="img img2" src={Alb1} />
                </div>

                <div className="bottom-sect"></div>
                </div>

        </div>
        
    )
}

export default ParaLanding;
