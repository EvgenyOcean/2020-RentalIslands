import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PageIslands from './components/PageIslands';
import PageIsland from './components/PageIsland';
import PageHome from './components/PageHome';
import PageError from './components/PageError';
import Navbar from './components/Navbar';


function App() {
  return (
    <>    
      <Navbar />
      <Switch>
        <Route exact path="/" component={PageHome}/>
        <Route exact path="/islands" component={PageIslands}/>
        <Route exact path="/islands/:path" component={PageIsland}/>
        <Route component={PageError}/>
      </Switch>
    </>
  );
}

export default App;