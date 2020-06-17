import React from 'react';
import IslandDescSECTION from './IslandDescSC';

function IslandDesc(props) {
  const island = props.theIsland; 
  let {name, location, type, weekPrice, islandSize, lifestyles, description} = island;
  //adding commas for prettier rendering
  lifestyles = lifestyles.map((ls, ind) => ind+1 !== lifestyles.length ? ` ${ls},` : ` ${ls}`);
  return (
    <IslandDescSECTION>
      <div className="info">
        <table className="table-info">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{name}</td>
            </tr>
            <tr>
              <th>Location</th>
              <td>{location}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{type}</td>
            </tr>
            <tr>
              <th>Week Price</th>
              <td>${weekPrice}</td>
            </tr>
            <tr>
              <th>Island Size</th>
              <td>{islandSize}</td>
            </tr>
            <tr>
              <th>Lifestyles</th>
              <td>{lifestyles}</td>
            </tr>
          </tbody>
        </table>
        <div className="description">
          {description}
        </div>
      </div>
    </IslandDescSECTION>
  );
}

export default IslandDesc;