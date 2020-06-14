import React, { Component } from 'react';
import islands from '../images/islands.jpg';
import Hero from './Hero';
import Banner from './Banner';

class PageIslands extends Component {
  render() {
    return (
      <Hero hero={islands}>
        <Banner title="Find your private island" subtitle={<i>I feel we are all islands - in a common sea. <br /> &copy; Anne Morrow</i>}>
          <button className="btn btn-primary">Return Home</button>
        </Banner>
      </Hero>
    );
  }
}

export default PageIslands;