import React from 'react';
import {Link} from 'react-router-dom';
import Hero from './Hero';
import Banner from './Banner';
import dragonHead from '../images/DragonHead.jpg';

function PageIsland(props) {
  return (
    <Hero hero={dragonHead}>
      <Banner title="Little Harvest" subtitle="Belize, Central America">
        <Link to="/" className="btn btn-primary">Return Home</Link>
      </Banner>
    </Hero>
  );
}

export default PageIsland;