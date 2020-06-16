import styled from 'styled-components';

const IslandDIV = styled.div`
  box-shadow: var(--lightShadow);
  .island-img{
    position: relative;
  }

  img{
    width: 100%;
    height: 180px;
    vertical-align: bottom;
  }

  .island-price{
    background-color: var(--mainBlack);
    border-radius: 0 0 10px 0; 
    position: absolute;
    top: 0;
    left: 0;
    color: var(--offWhite);
    font-size: 0.7rem;
    padding: 0.5em;
  }


  .island-name{
    background-color: var(--darkGrey);
    font-weight: bold;
    text-align: center;
    padding: 0.5em;
  }

  .btn{
    opacity: 0;
    position: absolute; 
    left: 50%;
    top: 50%; 
    transform: translate(-50%, -50%);
    transition: var(--mainTransition);
  }

  &:hover{
    background: rgba(0,0,0,0.7);

    img{
      opacity: 0.3;
    }

    .btn{
      opacity: 100;
    }
  }
`

export default IslandDIV;