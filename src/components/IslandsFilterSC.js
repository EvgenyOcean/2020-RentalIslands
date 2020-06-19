import styled from 'styled-components';

const FilterDIV = styled.div`
  form{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 2rem;
  }

  .form-group{
    width: calc(100% / 5 - 1rem);
    input, lable, select{
      display: block;
      width: 100%;
    }
  }

  .form-group.checkbox-group{
    .checkbox{
      display: flex;
      align-items: center;

      label, input{
        display: inline; 
        width: auto;
      }

      input{
        margin-right: 0.3rem;
      }
    }
  }

  @media (max-width: 900px){
    form{
      flex-direction: column;
    }

    .form-group{
      width: 100%;
      margin-bottom: 0.5rem;
    }
  }
`

export default FilterDIV; 