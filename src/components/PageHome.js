import React from 'react';
import {useContext, useState, useEffect} from 'react'; 
import {DataContext} from '../contexts/DataContext';
import {Link} from 'react-router-dom';
import Hero from './Hero';
import Services from './Services';
import TopIslands from './TopIslands';

function Home(props) {
  let context = useContext(DataContext); 
  const [path, changePath] = useState('');

  useEffect(()=>{
    let {islands, loading} = context;
    if (loading) return;
    let randNum = Math.floor(Math.random() * islands.length);
    changePath(islands[randNum].path);
  }, [context])

  return (
    <>
      <Hero>
        <div className="btns">
          <Link to="/islands" className="btn btn-all">
            <span>- BROWSE -</span>
            <h4>Available Islands</h4>
          </Link>
          <Link to={"/islands/" + path} className="btn btn-random">
            <span>- LET US -</span>
            <h4>Suggest an Island</h4>
          </Link>
        </div>
      </Hero>
      <Services />
      <TopIslands />
    </>
  );
}

export default Home;