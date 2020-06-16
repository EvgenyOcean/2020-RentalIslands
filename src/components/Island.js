import React from 'react';
import {Link} from 'react-router-dom';
import IslandDIV from './IslandSC';

function Island({name, price, img, path}) {
  return (
    <IslandDIV>
      <div className="island-img">
        <img src={img} alt={name}></img>
        <div className="island-price">${price}<br/>per week</div>
        <Link to={'/islands/' + path} className="btn btn-primary">DETAILS</Link>
      </div>
      <p className="island-name">{name}</p>
    </IslandDIV>
  );
}

export default Island;