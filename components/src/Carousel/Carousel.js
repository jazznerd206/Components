// DEPENDENCY FREE CAROUSEL
// 30 SECOND OF KNOWLEDGE TRANSCRIPTION
import React, { useState, useEffect, cloneElement } from 'react';

function Carousel(props) {
    const [active, setActive] = useState(0);
    let scrollInterval = null;
    const style = {
      carousel: {
        position: "relative",
        height: '50vh'
      },
      carouselItem: {
        position: "absolute",
        visibility: "hidden",
        height: '250px',
        width: '250px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'black',
        color: 'white'
      },
      visible: {
        visibility: "visible"
      }
    };
    useEffect(() => {
      scrollInterval = setTimeout(() => {
        const { carouselItems } = props;
        setActive((active + 1) % carouselItems.length);
      }, 2000);
    });
    const { carouselItems, ...rest } = props;
    return (
      <div style={style.carousel}>
        {carouselItems.map((item, index) => {
          const activeStyle = active === index ? style.visible : {};
          return cloneElement(item, {
            ...rest,
            style: {
              ...style.carouselItem,
              ...activeStyle
            }
          });
        })}
      </div>
    );
  }

export default Carousel;
