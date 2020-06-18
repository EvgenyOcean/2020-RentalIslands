import styled from 'styled-components';

const DetailSliderDIV = styled.div`
  width: 100vw;
  max-width: 1920px;
  margin: 0 auto;
  padding: 2rem 5vw;
  position: relative;
  
  .slider-container{
    overflow: hidden;
  }

  .slides-container{
    display: flex;
    height: 40vh;
    min-height: 570px;
    transition: all .3s ease-in;
    margin-left: -90vw;

    .slide{
      width: 90vw;
      height: 100%;
      flex-shrink: 0;
      object-fit: cover; 
    }
  }

  .slider-btn{
    position: absolute; 
    top: 50%; 
    transform: translateY(-50%);
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    
    svg{
      color: var(--darkGrey);
      width: 2rem;
      height: 10rem;
      vertical-align: bottom;
    }
  }

  .slider-btn--left{
    left: 1.5vw; 
  }

  .slider-btn--right{
    right: 1.5vw; 
  }

  @media (max-width: 1100px){ 
    .slider-btn--left{
      left: 0.3vw; 
    }

    .slider-btn--right{
      right: 0.3vw; 
    }
  }

  @media (max-width: 768px){ 
    .slider-btn--left{
      left: 5vw; 
      color: white;
    }

    .slider-btn--right{
      right: 5vw; 
      color: white;
    }
  }

`

export default DetailSliderDIV;