import React from 'react';
import Title from './Title';
import ServicesSection from './ServicesSC';
import {FaCocktail, FaYoutubeSquare, FaTableTennis, FaWineBottle} from 'react-icons/fa';

function Services(props) {

  const createServices = () => {
    return [
      {img: FaCocktail, name: "Free Coctails", desc: "Enjoy the best cocktails from all around the globe. You can get them for free at every bar."},
      {img: FaYoutubeSquare, name: "Free Cinema", desc: "Outdoor movie nights. Enjoy the most popular movies on the big screens."},
      {img: FaTableTennis, name: "Free Fitness", desc: "Some Islands have special sports fields with modern training equipment."},
      {img: FaWineBottle, name: "Finest Wine", desc: "Special cellars with the choicest aged wines."},
    ]
  }

  return (
    <ServicesSection>
      <div className="container">
        <Title title="Special Services"/>
        <div className="services">
          {createServices().map((service, ind) => (
            <article key={ind} className="service">
              <service.img/>
              <h6>{service.name}</h6>
              <p>{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </ServicesSection>
  );
}

export default Services;