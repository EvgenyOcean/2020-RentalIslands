import React from 'react';
import Hero from './Hero';
import Banner from './Banner';
import dragonHead from '../images/DragonHead.jpg';

function PageIsland(props) {
  return (
    <Hero hero={dragonHead}>
      <Banner title="Little Harvest" subtitle="Belize, Central America">
        <button className="btn btn-primary">Return Home</button>
      </Banner>
    </Hero>
  );
}

export default PageIsland;