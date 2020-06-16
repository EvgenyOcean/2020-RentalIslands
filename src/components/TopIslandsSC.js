import styled from 'styled-components';

const TopIslnadsSECTION = styled.section`
  background-color: var(--mainWhite);
  padding: 3rem 0; 

  .container{
    max-width: 1200px;
    margin: 0 auto; 
    padding: 0 1rem; 
  }

  .top-center{
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(255px, 1fr)); 
    grid-row-gap: 1rem; 
    grid-column-gap: 1rem; 
  }
`

export default TopIslnadsSECTION;