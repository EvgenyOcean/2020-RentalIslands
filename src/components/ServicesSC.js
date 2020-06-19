import styled from 'styled-components';

const ServicesSection = styled.section`
  padding: 3rem 0;
  background-color: var(--mainGrey);
  .container{
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;

    .services{
      display: flex; 
      justify-content: space-between;
      text-align: center;
      flex-wrap: wrap;
    }

    .service{
      width: 100%;
      margin-bottom: 1rem;

      h6{
        letter-spacing: var(--mainSpacing);
      }

      svg{
        font-size: 3rem;
        color: var(--primaryColor);
      }
    }
  }

  @media (min-width: 768px){
    .services .service{
      width: 45%;
    }
  }

  @media (min-width: 1100px){
    .services .service{
      width: 20%;
    }
  }
`

export default ServicesSection;