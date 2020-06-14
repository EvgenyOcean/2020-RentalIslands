import styled from 'styled-components';


const BannerDIV = styled.div`
  display: inline-block;
  background: rgba(0, 0, 0, 0.5);
  color: var(--mainWhite);
  padding: 2rem 1rem;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);
  max-width: 900px; 
  width: 100%;
  margin-top: 54px;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    margin-top: 0;
    line-height: 1.5;
  }

  .underline {
    width: 50%;
    height: 5px;
    background: var(--primaryColor);
    margin: 1.7rem auto;
  }

  p {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 576px) {
    h1 {
      font-size: 2.3rem;
    }
  }

  @media screen and (min-width: 992px) {
    h1 {
      font-size: 3rem;
    }
  }
`

export default BannerDIV;