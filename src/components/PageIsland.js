import React from 'react';
import {Link} from 'react-router-dom';
import Hero from './Hero';
import Banner from './Banner';
import {DataContext} from '../contexts/DataContext';
import IslandDesc from './IslandDesc';
import DetailedSlider from './DetailSlider';

class PageIsland extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      path: this.props.match.params.path,
    }
  }

  componentDidMount(){
    window.scrollTo(0,0);
  }

  static contextType = DataContext; 

  render(){
    let {checkPath} = this.context;
    let theIsland = checkPath(this.state.path);
    if (theIsland){
      const {name, location, img} = theIsland;
      return (
        <>
          <Hero hero={img}>
            <Banner title={name} subtitle={location}>
              <Link to="/" className="btn btn-primary">Return Home</Link>
            </Banner>
          </Hero>
          <IslandDesc theIsland={theIsland}/>
          <DetailedSlider />
        </>
      );
    } else { // obv it's better to redirect to the error page somehow
      return (
        <h1>ERROR!</h1>
      )
    }
  }
}

export default PageIsland;