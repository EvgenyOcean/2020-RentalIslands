import styled, {css} from 'styled-components';
import defaultHero from '../images/hero.jpg';


const HeroDIV = styled.div`
  height: 100vh;
  background-image: url(${defaultHero});
  background-position: center;
  background-size: cover; 
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;

  .btns{
    max-width: 660px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    .btn{
      width: 315px; 
      background-color: rgba(0,0,0,0.55);
      text-decoration: none; 
      color: white; 
      padding: 2em 2em;
      text-align: center;

      &:hover{
        background-color: rgba(0,0,0,0.75);
      }

      h4{
        text-transform: uppercase;
        margin-top: 1rem;
      }
    }

    @media (max-width: 768px){
      flex-direction: column;
      align-items: center; 

      .btn:first-child{
        margin-bottom: 1rem;
      }
    }

  }

  ${props => props.island && css`
    background-image: url(${props.island});
    height: 60vh;

    @media (max-height: 800px){
      min-height: 480px;
    }
  `}

  ${props => !props.island && css`
    @media (max-height: 800px){
      min-height: 800px;
    }
  `}
`

export default HeroDIV;