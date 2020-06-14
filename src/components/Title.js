import React from 'react';
import styled from 'styled-components';

const TitleDIV = styled.div`
  text-align: center; 
  color: black; 

  .underline{
    background-color: var(--primaryColor);
    height: 5px;
    width: 70px;
    margin: 0 auto;
    margin-bottom: 1em;
  }
`

function Title({title}) {
  return (
    <TitleDIV>
      <h3>{title}</h3>
      <div className="underline"></div>
    </TitleDIV>
  );
}

export default Title;