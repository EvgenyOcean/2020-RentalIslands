import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Nav from './NavbarSC';
import logo from '../images/logo.svg';
import {FaAlignJustify} from 'react-icons/fa';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {isOpen: false, dark: false};
    this.handleBurgerClick = this.handleBurgerClick.bind(this);
  }

  handleBurgerClick(){
    this.setState(prevState => ({isOpen: !prevState.isOpen}));
  }

  componentDidMount(){
    let navbar = document.getElementById('navbar');
    if (!navbar) return;
    let changeNavColor = () => {
      if (window.pageYOffset > 100 && !navbar.classList.contains('dark')){
        this.setState({dark: true});
      } else if (window.pageYOffset < 100 && navbar.classList.contains('dark')){
        this.setState({dark: false});
      }
    }
    document.addEventListener('scroll', changeNavColor); 

    return () => {document.removeEventListener('scroll', changeNavColor)};
  }

  render() {
    let darkClass = this.state.dark && 'dark';
    let openClass = this.state.isOpen && 'isOpen';

    return (
      <Nav id="navbar" className={[darkClass, openClass]}>
        <div className="container">
          <div className="header">
            <Link to="/"><img src={logo} alt="Islands Inc."/></Link>
            <button onClick={this.handleBurgerClick} className="toggle" type="button">
              <FaAlignJustify/>
            </button>
          </div>
          <ul className="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/islands">Islands</Link></li>
          </ul>
        </div>
      </Nav>
    );
  }
}

export default Navbar;