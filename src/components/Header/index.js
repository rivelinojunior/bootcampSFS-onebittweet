import React from "react";
import { Navbar, NavItem, Row, Icon } from 'react-materialize';
 
import styled from 'styled-components';
import logo from '../../images/logo.png';
 
const NavbarBlue = styled.nav`
  background-color: #75d3f4;`
;
 
const Logo = styled.img`
  max-width: 210px;
  margin-top: 15px;`
;
 
const IconUser = styled(Icon)`
  font-size: 40px !important;`
;
 
const Header = () => (
  <NavbarBlue>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo"><Logo src={logo} className="col m6" /></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="#">Logout</a></li>
        <li><a href="#"> <IconUser>account_circle</IconUser></a></li>
      </ul>
    </div>
  </NavbarBlue>
);
 
export default Header;
