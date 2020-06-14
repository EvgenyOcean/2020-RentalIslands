import React from 'react';
import Hero from './Hero';
import Banner from './Banner';

function ErrorPage(props) {
  return (
    <Hero>
      <Banner title="This page does not exists">
        <button className="btn btn-primary">Return Home</button>
      </Banner>
    </Hero>
  );
}

export default ErrorPage;