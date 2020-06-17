import React from 'react';
import DetailSliderDIV from './DetailSliderSC';
import detail from '../images/LIfestyles/bar.jpg';
import detail2 from '../images/LIfestyles/diving.jpg';
import detail3 from '../images/LIfestyles/diving2.jpg';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';

function DetailSlider(props) {
  let counter = 0;
  const handleClick = (e) => {
    let slider = document.querySelector('.slides-container'); 
    let btn = e.target.closest('button');
    if (btn.id === 'left'){
      counter++; 
      slider.style.marginLeft = `${counter * 90}vw`; 
    } else if (btn.id === 'right'){
      counter--; 
      slider.style.marginLeft = `${counter * 90}vw`; 
    }
  }

  return (
    <DetailSliderDIV>
      <button id="left" className="slider-btn slider-btn--left" onClick={handleClick}><FaAngleLeft/></button>
      <div className="slider-container">        
        <div className="slides-container">
          <img src={detail} alt="" className="slide"></img>
          <img src={detail2} alt="" className="slide"></img>
          <img src={detail3} alt="" className="slide"></img>
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