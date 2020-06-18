import React from 'react';
import DetailSliderDIV from './DetailSliderSC';
import detail from '../images/LIfestyles/bar.jpg';
import detail2 from '../images/LIfestyles/diving.jpg';
import detail3 from '../images/LIfestyles/diving2.jpg';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';

function DetailSlider(props) {
  let counter = -1; 
  let isTransitionOn = false; 

  let handleClick = (e) => {
    if (isTransitionOn) return; 
    isTransitionOn = true; 
    let slider = document.querySelector('.slides-container');
    let slides = document.querySelectorAll('.slide');
    let btn = e.target.closest('button'); 

    const lastMainImg = -(slides.length - 2);  
    const lastDecorativeImg = -(slides.length - 1) 

    if (btn.id === 'left'){
      counter++; 
      slider.style.transition = 'all .3s';
      slider.style.marginLeft = `${counter * 90}vw`; 

    } else if (btn.id === 'right'){
      counter--; 
      slider.style.transition = 'all .3s';
      slider.style.marginLeft = `${counter * 90}vw`; 
    }

    document.addEventListener('transitionend', function inner(e) {
      if (counter === 0){ 
        slider.style.transition = 'none'; 
        counter = lastMainImg; 
        slider.style.marginLeft = `${counter * 90}vw`; 
      } 

      if (counter === lastDecorativeImg){
        slider.style.transition = 'none';
        counter = -1; 
        slider.style.marginLeft = `${counter * 90}vw`; 
      }

      document.removeEventListener('transitionend', inner);
      isTransitionOn = false;
    })
  }


  return (
    <DetailSliderDIV>
      <button id="left" className="slider-btn slider-btn--left" onClick={handleClick}><FaAngleLeft/></button>
      <div className="slider-container">        
        <div className="slides-container">
          <img src={detail3} alt="" className="slide"></img> {/* 0 */}

          <img src={detail} alt="" className="slide"></img> {/* -1 */}
          <img src={detail2} alt="" className="slide"></img>
          <img src={detail3} alt="" className="slide"></img> {/* -3 */}

          <img src={detail} alt="" className="slide"></img> {/* -4 */}
        </div>
      </div>
      <button id="right" className="slider-btn slider-btn--right" onClick={handleClick}><FaAngleRight/></button>
      <div className="navigation-container">
        <div className="nav"></div>
        <div className="nav"></div>
        <div className="nav"></div>
      </div>
    </DetailSliderDIV>
  );
}

export default DetailSlider;