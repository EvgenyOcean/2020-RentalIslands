import React from 'react';
import {Link} from 'react-router-dom';
import Hero from './Hero';

function Home(props) {
  return (
    <Hero>
      <div className="btns">
        <Link to="/islands" className="btn btn-all">
          <span>- BROWSE -</span>
          <h4>Available Islands</h4>
        </Link>
        <Link to="/" className="btn btn-random">
          <span>- LET US -</span>
          <h4>Suggest an island</h4>
        </Link>
      </div>
    </Hero>
  );
}

export default Home;