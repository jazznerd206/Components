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
                    <span>Andrew</span>
                    <span>Miller</span>
                    <p>random random random random random random random random random random random random random random random random random random random random random random random random random random random random random random random random random random random random random random random random random random random random random random random random random random </p>
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

                <div className="title">
                    <h2>wELcOme</h2>
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
