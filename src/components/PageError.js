import React from 'react';
import {Link} from 'react-router-dom';
import Hero from './Hero';
import Banner from './Banner';

function ErrorPage(props) {
  return (
    <Hero>
      <Banner title="This page does not exists">
        <Link to="/" className="btn btn-primary">Return Home</Link>
      </Banner>
    </Hero>
  );
}

export default ErrorPage;