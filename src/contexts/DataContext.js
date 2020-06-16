import React, { Component } from 'react';
import data from '../data';

export const DataContext = React.createContext();


// 1. Find top rooms and put thme into an array
// 2. Find all rooms and put them into an array
class DataContextProvider extends Component {
  constructor(props){
    super(props);
    this.state = {
      islands: [], 
      topIslands: [], 
      loading: true,
    }
  }

  componentDidMount(){
    let topIslands = data.filter(island => island.top === true);
    let islands = data; 
    this.setState({islands, topIslands, loading: false});
  }

  render() {
    return (
      <DataContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataContextProvider;