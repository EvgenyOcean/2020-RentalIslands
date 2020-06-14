import React from 'react';
import BannerSC from './BannerSC';

function Banner({title, subtitle, children}) {
  return (
    <BannerSC>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <div className="underline"></div>
      {children}
    </BannerSC>
  );
}

export default Banner;