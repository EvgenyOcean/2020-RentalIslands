import React, { Component } from 'react';
import data from '../data';

export const DataContext = React.createContext();

class DataContextProvider extends Component {
  constructor(props){
    super(props);
    this.state = {
      islands: [], 
      topIslands: [], 
      loading: true,
    };
    this.checkPath = this.checkPath.bind(this);
  }

  checkPath(path){
    return this.state.islands.find(island => island.path === path); 
  }

  componentDidMount(){
    let topIslands = data.filter(island => island.top === true);
    let islands = data; 
    this.setState({islands, topIslands, loading: false});
  }

  render() {
    return (
      <DataContext.Provider value={{ ...this.state, checkPath: this.checkPath }}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataContextProvider;