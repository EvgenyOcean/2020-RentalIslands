import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Nav from './NavbarSC';
import logo from '../images/logo.svg';
import {FaAlignJustify} from 'react-icons/fa';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {isOpen: false};
    this.handleBurgerClick = this.handleBurgerClick.bind(this);
  }

  handleBurgerClick(){
    this.setState(prevState => ({isOpen: !prevState.isOpen}));
  }

  render() {
    return (
      <Nav>
        <div className="container">
          <div className="header">
            <Link to="/"><img src={logo} alt="Islands Inc."/></Link>
            <button onClick={this.handleBurgerClick} className="toggle" type="button">
              <FaAlignJustify/>
            </button>
          </div>
          <ul className={this.state.isOpen ? "navbar isOpen" : "navbar"}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/islands">Islands</Link></li>
          </ul>
        </div>
      </Nav>
    );
  }
}

export default Navbar;