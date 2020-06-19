import React from 'react';
import Title from './Title';
import {DataContext} from '../contexts/DataContext';
import FilterDIV from './IslandsFilterSC';

function IslandsFilter(props) {

  const figureTypesSizes = (islands, prop) => {
    let options = new Set();
    islands.forEach(island => options.add(island[prop]));
    options = ['all',...options];
    options = options.map(option => <option value={option} key={option}>{option}</option>); 
    return options;
  }

  const figureLifestyles = (islands) => {
    let options = []
    islands.forEach(island => options.push(...island.lifestyles));
    options = ["all", ...new Set(options)];
    options = options.map(option => <option value={option} key={option}>{option}</option>); 
    return options;
  }

  return (
    <DataContext.Consumer>
      {value => {
        let {islands} = value; 
        return (
          <FilterDIV>
            <Title title="Search Islands"/>
            <form className="form">
              <div className="form-group">
                <label htmlFor="type">Renting Type</label>
                <select name="type" id="type" value={props.info.type} onChange={props.changeHandler}>
                  {figureTypesSizes(islands, 'type')}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="lifestyles">Lifestyle</label>
                <select name="lifestyles" id="lifestyles" value={props.info.lifestyles} onChange={props.changeHandler}>
                  {figureLifestyles(islands)}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="weekPrice">Week Price ${props.info.weekPrice}</label>
                <input type="range" name="weekPrice" id="weekPrice" value={props.info.weekPrice} onChange={props.changeHandler} min={props.info.minWeekPrice} max={props.info.maxWeekPrice}/>
              </div>
              <div className="form-group">
                <label htmlFor="islandSize">Island Size</label>
                <select name="islandSize" id="islandSize" value={props.info.islandSize} onChange={props.changeHandler}>
                  {figureTypesSizes(islands, 'islandSize')}
                </select>
              </div>
              <div className="form-group checkbox-group">
                <div className="checkbox">
                  <input type="checkbox" name="rentalYacht" id="rentalYacht" onChange={props.changeHandler} checked={props.info.rentalYacht} />
                  <label htmlFor="rentalYacht">Rental Yacht</label>
                </div>
                <div className="checkbox">
                  <input type="checkbox" name="pets" id="pets" onChange={props.changeHandler} checked={props.info.pets} />
                  <label htmlFor="pets">Pets</label>
                </div>
              </div>
            </form>
          </FilterDIV>
        )
      }}
    </DataContext.Consumer>
  );
}

export default IslandsFilter;