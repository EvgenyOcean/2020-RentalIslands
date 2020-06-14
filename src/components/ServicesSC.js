import styled from 'styled-components';

const ServicesSection = styled.section`
  padding: 3rem 1rem;
  background-color: var(--mainGrey);
  .container{

    .services{
      display: grid; 
      grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
      grid-row-gap: 2rem; 
      grid-column-gap: 1rem;
    }

    article{
      text-align: center;

      h6{
        letter-spacing: var(--mainSpacing);
      }

      svg{
        font-size: 3rem;
        color: var(--primaryColor);
      }
    }
    

    @media (min-width: 768px){
      max-width: 1200px; 
      margin: 0 auto;
      .services{
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      }
    }

    @media (min-width: 1100px){
      .services{
        grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
      }
    }
  }
`

export default ServicesSection;