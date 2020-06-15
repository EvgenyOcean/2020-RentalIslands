import styled from 'styled-components';

const Nav = styled.nav`
  background: rgba(0,0,0,0.3);
  padding: 1rem 0; 
  position: fixed; 
  top: 0; 
  left: 0; 
  width: 100%;
  .container{
    padding: 0 1rem;

    .header{
      display: flex;
      justify-content: space-between; 
      align-items: center;

      a{
        img{
          width: 220px;
          height: 50px;
          vertical-align: bottom; 
        }
      }

      button{
        background-color: transparent;
        border: none; 
        outline: none; 
        cursor: pointer;

        svg{
          font-size: 2rem; 
          vertical-align: bottom; 
          color: #FFC700;
        }

        @media (min-width: 768px){
          display: none;
        }
      }
    }

    @media (min-width: 768px){
      max-width: 1200px; 
      margin: 0 auto;
      justify-content: space-between; 
      display: flex; 
    }

    .navbar{
      height: 0; 
      overflow: hidden; 
      list-style: none; 
      transition: var(--mainTransition);

      li{
        text-align: center;
        a{
          display: block; 
          text-decoration: none; 
          color: white; 
          padding: 1em 1em;
          font-weight: bold; 
          font-size: 1rem;

          &:hover{
            background-color: rgba(0,0,0,0.5);
          }
        }
      }

      &.isOpen{
        height: 100px;

        @media (min-width: 768px){
          height: auto;
        }
      }

      @media (min-width: 768px){
        display: flex; 
        height: auto;
      }
    }
  }
`

export default Nav;