import React from 'react';
import Island from './Island';
import styled from 'styled-components';

const MatchedDIV = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
  grid-column-gap: 1rem; 
  grid-row-gap: 1rem;
`

function IslandsMatch(props) {
  let islands = props.islands;
  const generateIslands = () => {
    islands = islands.map(island => <Island key={island.id} name={island.name} price={island.weekPrice} img={island.img} path={island.path}/>)
    return islands;
  }
  return (
    <MatchedDIV>
      {generateIslands()}
    </MatchedDIV>
  );
}

export default IslandsMatch;