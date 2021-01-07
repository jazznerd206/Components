import React, { useState, useEffect } from 'react';
import GolfBall from '../public/GolfBall.png'
import './styles.css'

function ParaLanding() {

    const scrollFunc = () => {
        const app = document.querySelector('.container');
        const heading = document.getElementById('heading');
        const page2Title = document.querySelectorAll('.secondpage h1 span');
        const container = document.getElementById('firstpage')
        const l1 = document.getElementById('level-one');
        const l2 = document.getElementById('level-two');
        const l3 = document.getElementById('level-three');
        const golfBall = document.getElementById('image');
        const imgs = document.querySelectorAll('.imgs .img');
        const progressLine = document.querySelector('.progress-line');


        // LENGTH OF SCROLL UNTIL TRANSITION BEGIN
        const SCROLL_SCALE = 500;
        // TRANSITION BEGIN
        const TRANSITION_END = 800;
        // TRANSITION END?
        const WORD_SPLIT_END = 2300;
        // END OF PAGES
        const END_OF_PAGE = 3450;

        console.log(l1,l2,l3)

        if (y < SCROLL_SCALE) {
            const percent = y / SCROLL_SCALE;
            l1.style.transform = `scale(${1 + 0.4 * percent})`;
            l2.style.transform = `scale(${1 + 0.1 * percent})`; 
            l3.style.transform = `scale(${1 + 0.04 * percent})`;
            heading.style.transform = `scale(${1 + 0.35 * percent})`;
        } else if (y < TRANSITION_END) {
            const percent = (y - SCROLL_SCALE) / (TRANSITION_END - SCROLL_SCALE);
            container.style.opacity = `${1 - percent}`;
        } else if (y < WORD_SPLIT_END) {
            const offset = y - TRANSITION_END;
            page2Title[0].style.transform = `translate3d(0, -${offset}px, 0)`;          
            if (offset > 300) {
            //   page2Title[0].style.transform = `translate3d(-${offset - 300}px, 0, 0)`;
              page2Title[1].style.transform = `translate3d(-${offset - 300}px, 0, 0)`;
            }
            if (y < SCROLL_SCALE) {
                // Mountain scaling code
              } else if (y < TRANSITION_END) {
                // Transition code
              } else if (y < WORD_SPLIT_END) {
                // Rest of title animation
              
                if (offset > 500) {
                  const perc = Math.min(
                    1, 
                    (offset - 500) / (WORD_SPLIT_END - TRANSITION_END - 500)
                  );
                  golfBall.style.transform = `scale(${1.2 * perc})`;
                }
            }
            if (y < SCROLL_SCALE) {
                // Mountain scaling code
              } else if (y < TRANSITION_END) {
                // Transition code
              } else if (y < WORD_SPLIT_END) {
                // Title animation code
              } else if (y < END_OF_PAGE) {
                const offset = y - WORD_SPLIT_END;
                const duration = END_OF_PAGE - WORD_SPLIT_END;
              
                app.style.transform = `translate3d(0, -${offset}px, 0)`;
                imgs[0].style.transform = `translate3d(0, -${offset * 0.1}px, 0)`;
                imgs[1].style.transform = `translate3d(0, -${offset * 0.25}px, 0)`;

                if (y < SCROLL_SCALE) {
                    // Mountain scaling code
                  } else if (y < TRANSITION_END) {
                    // Transition code
                  } else if (y < WORD_SPLIT_END) {
                    // Title animation code
                  } else if (y < END_OF_PAGE) {
                    // rest of scrolling code
                  
                    const progressTrigger = duration * 0.2;
                  
                    if (offset > progressTrigger) {
                      const progressDur = duration - progressTrigger;
                      const progressOff = offset - progressTrigger;
                      const progress = Math.min(1, progressOff / progressDur) * 100;
                      progressLine.style.transform = `translate3d(0, -${100 - progress}%, 0)`;
                    } else {
                      progressLine.style.transform = `translate3d(0, -100%, 0)`;
                    }
                  }
              }
        }
    }

    const [ y, sety ] = useState(0);

    const getYPosition = () => {
        document.addEventListener('scroll', () => {
            const yOff = window.pageYOffset;
            sety(yOff);
        });
    }

    useEffect(() => {
        getYPosition();
        console.log(y)
        scrollFunc();
    }, [y])

    return (
        <div>
            <div className="container firstpage" id="firstpage">
                <h1 id="heading" className="heading">Scroll to begin</h1>
                <div className="level-one" id="level-one">
                    <div className="block-one" id="block-one">

                    </div>
                </div>
                <div className="level-two" id="level-two">
                    <div className="block-two" id="block-two">

                    </div>
                </div>
                <div className="level-three" id="level-three">
                    <div className="block-three" id="block-three">

                    </div>
                </div>
            </div>    
            <div className="container secondpage" id="secondpage">
                <h1 className="heading" id="heading">
                    <span>Andrew</span>
                    <span>Miller</span>
                </h1>
                <img
                    src={GolfBall}
                    className="image"
                    id="image"
                />
            </div>
            <div class="thirdpage">
                <div class="progress-line">
                </div>

                <div class="title">
                    <h2>wELcOme</h2>
                </div>

                <div class="imgs">
                    <img class="img img1" src="https://placekitten.com/g/400/400" />
                    <img class="img img2" src="https://placekitten.com/g/400/500" />
                </div>

                <div class="bottom-sect"></div>
                </div>

        </div>
        
    )
}

export default ParaLanding;
