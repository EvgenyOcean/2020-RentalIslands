import styled from 'styled-components';

const DetailSliderDIV = styled.div`
  width: 100%;
  padding: 2rem 5vw;
  position: relative;
  
  .slider-container{
    overflow: hidden;

  }

  .slides-container{
    width: 9999px;
    display: flex;
    height: 40vh;
    min-height: 570px;

    .slide{
      width: 90vw;
      height: 100%;
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
      width: 2rem;
      height: 10rem;
      vertical-align: bottom;
    }
  }

  .slider-btn--left{
    left: 1rem; 
  }

  .slider-btn--right{
    right: 1rem; 
  }
`

export default DetailSliderDIV;