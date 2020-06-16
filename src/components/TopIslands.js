import React, { Component } from 'react';
import { DataContext } from '../contexts/DataContext';
import Island from './Island';
import TopIslandsSECTION from './TopIslandsSC';
import Title from './Title';

class TopIslands extends Component {
  static contextType = DataContext;

  gettingIslands(topIslands){
    return topIslands.map(island => <Island key={island.id} name={island.name} price={island.weekPrice} img={island.img} path={island.path}/>)
  }

  render() {
    let {topIslands, loading} = this.context;
    return (
      <TopIslandsSECTION>
        <div className='container'>
          <Title title="Top Islands"/>
          <div className="top-center">
            {loading ? "The data is comming..." : this.gettingIslands(topIslands)}
          </div>
        </div>
      </TopIslandsSECTION>
    );
  }
}

export default TopIslands;