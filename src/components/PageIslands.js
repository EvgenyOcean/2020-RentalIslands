import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import islands from '../images/islands.jpg';
import Hero from './Hero';
import Banner from './Banner';

class PageIslands extends Component {
  render() {
    return (
      <Hero hero={islands}>
        <Banner title="Find your private island" subtitle={<i>I feel we are all islands - in a common sea. <br /> &copy; Anne Morrow</i>}>
          <Link to="/" className="btn btn-primary">Return Home</Link>
        </Banner>
      </Hero>
    );
  }
}

export default PageIslands;