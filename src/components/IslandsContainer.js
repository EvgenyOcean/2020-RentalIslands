import React, { Component } from 'react';
import IslandContainerSECTION from './IslandsContainerSC';
import {DataContext} from '../contexts/DataContext';
import IslandsFilter from './IslandsFilter'; 
import IslandsMatch from './IslandsMatch'; 

class IslandsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      type: "all", 
      lifestyles: "all",
      weekPrice: 0, 
      minWeekPrice: 0, 
      maxWeekPrice: 0, 
      islandSize: "all",
      rentalYacht: false, 
      pets: false,
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.figureSorted = this.figureSorted.bind(this);

  }

  static contextType = DataContext;

  componentDidMount(){
    if (this.state.maxWeekPrice === 0 && !this.context.loading){
      let {islands} = this.context; 
      let maxWeekPrice = Math.max(...islands.map(island => island.weekPrice));
      this.setState({maxWeekPrice, weekPrice: maxWeekPrice});
    }
  }

  componentDidUpdate(){
    if (this.state.maxWeekPrice === 0){
      let {islands} = this.context; 
      let maxWeekPrice = Math.max(...islands.map(island => island.weekPrice));
      this.setState({maxWeekPrice, weekPrice: maxWeekPrice});
    }
  }

  changeHandler(e){
    let element = e.target; 
    let value = element.type === 'checkbox' ? element.checked : element.value;
    this.setState({[element.name]: value});
  }

  figureSorted(){
    let {islands} = this.context; 
    if (this.state.type !== 'all'){
      islands = islands.filter(island => island.type === this.state.type);
    };
    if (this.state.lifestyles !== 'all'){
      islands = islands.filter(island => island.lifestyles.includes(this.state.lifestyles));
    };
    
    if (this.state.weekPrice !== this.state.maxWeekPrice){
      islands = islands.filter(island => island.weekPrice <= this.state.weekPrice);
    };

    if (this.state.islandSize !== 'all'){
      islands = islands.filter(island => island.islandSize === this.state.islandSize);
    };

    if (this.state.rentalYacht){
      islands = islands.filter(island => island.rentalYacht);
    };

    if (this.state.pets){
      islands = islands.filter(island => island.pets);
    };

    return islands;
  }

  render() {
    return (
      <IslandContainerSECTION>
        <IslandsFilter info={{...this.state}} changeHandler={this.changeHandler}/>
        <IslandsMatch islands={this.figureSorted()}/>
      </IslandContainerSECTION>
    );
  }
}

export default IslandsContainer;