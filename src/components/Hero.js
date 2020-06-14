import React from 'react';
import HeroDIV from './HeroSC';

function Hero({hero, children}) {

  return (
    <HeroDIV island={hero} id="hero">{children}</HeroDIV>
  );
}

export default Hero;