import styled from 'styled-components';

const IslandDescSECTION = styled.section`
  background-color: var(--mainWhite);
  padding: 2rem 0;

  .info{
    display: flex; 
    justify-content: center;
    max-width: 1200px; 
    margin: 0 auto;
    padding: 0 1rem;

    .table-info{
      flex: 1;
      table-layout: fixed;
      background-color: var(--offWhite);
      padding: 1rem;

      td, th{
        width: 50%;
        text-align: left;
        text-transform: capitalize;
        padding: 1rem 0;
      }
    }

    .description{
      flex: 1;
      padding: 1rem;
      letter-spacing: 1px;
    }
  }

  @media (max-width: 650px){
    .info{
      flex-direction: column;
    }
  }
`

export default IslandDescSECTION;