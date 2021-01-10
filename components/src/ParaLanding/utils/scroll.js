export default function scrollFunc(y) {
    const app = document.querySelector('.container');
    const heading = document.getElementById('heading');
    const page2Title = document.querySelectorAll('.secondpage h1 span');
    const container = document.getElementById('firstpage')
    const l1 = document.getElementById('level-one');
    // const l2 = document.getElementById('level-two');
    // const l3 = document.getElementById('level-three');
    const golfBall = document.getElementById('image');
    const imgs = document.querySelectorAll('.imgs .img');
    const progressLine = document.querySelector('.progress-line');

    const SCROLL_SCALE = 300; // 500
    const TRANSITION_END = 1000; // 800
    const WORD_SPLIT_END = 3500; // 2300
    const END_OF_PAGE = 5000; // 3450

    if (y < SCROLL_SCALE) {
      const percent = y / SCROLL_SCALE;
      l1.style.transform = `scale(${1 + 0.4 * percent})`;
      // l2.style.transform = `scale(${1 + 0.1 * percent})`; 
      // l3.style.transform = `scale(${1 + 0.04 * percent})`;
      heading.style.display = 'block';
      heading.style.transform = `scale(${1 + 0.35 * percent})`;
      container.style.opacity = `1`;
    } else if (y < TRANSITION_END) {
      const percent = (y - SCROLL_SCALE) / (TRANSITION_END - SCROLL_SCALE);
      container.style.opacity = `${1 - percent * 4}`;
      container.style.display = 'block';
      heading.style.display = 'none';
      page2Title[0].style.transform = `translate3d(0, 0, 0)`;
      page2Title[1].style.transform = `translate3d(0, 0, 0)`;
      page2Title[1].style.fontSize = '.5em';
      page2Title[2].style.transform = `translate3d(0, 0, 0)`;
    } else if (y < WORD_SPLIT_END) {
      heading.style.transform = `scale(1.35)`;
      l1.style.transform = `scale(1.4)`;
      // l2.style.transform = `scale(1.1)`;
      // l3.style.transform = `scale(1.04)`;
      container.style.opacity = `0`;
      container.style.display = 'none';
      const offset = y - TRANSITION_END;
      page2Title[0].style.transform = `translate3d(0, -${offset}px, 0)`;
      page2Title[1].style.transform = `translate3d(0, 0, 0)`;
      page2Title[2].style.transform = `translate3d(0, ${offset}px, 0)`;
      golfBall.style.transform = `scale(0)`;
      app.style.transform = `translate3d(0, 0, 0)`;
      if (offset > 300) {
        page2Title[1].style.fontSize = '1em';
      }
      if (offset > 500) {
        page2Title[1].style.transform = `translate3d(-${offset - 300}px, 0, 0)`;
      }
      if (offset > 800) {
        const perc = Math.min(1, (offset - 500) / (WORD_SPLIT_END - TRANSITION_END - 800));
        golfBall.style.transform = `scale(${1.2 * perc})`;
      }
    }else if (y < END_OF_PAGE) {
      container.style.display = 'none';
      golfBall.style.transform = `scale(1.2)`;
      const offset = y - WORD_SPLIT_END;
      const duration = END_OF_PAGE - WORD_SPLIT_END;
      app.style.transform = `translate3d(0, -${offset}px, 0)`;
      imgs[0].style.transform = `translate3d(0, -${offset * 0.1}px, 0)`;
      imgs[1].style.transform = `translate3d(0, -${offset * 0.25}px, 0)`;
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
  };