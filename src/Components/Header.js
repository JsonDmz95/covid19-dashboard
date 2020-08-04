import React from 'react';

import {HeaderContainer, NavLi} from './StyledComponents';

import logo from "../img/logo.svg" ;
import overview from "../img/overview.svg" ;

const Header = () => {
  return (
    <HeaderContainer>
      <a href="/" className="logo-container" title="COVID-19 Global Trends">
        <img src={logo} className="img-fluid" alt="COVID-19 Global Trends"/>
      </a>

      <nav>
        <ul className="">
          <NavLi className="active">
          <a className="nav-link" href="#/">
            <img src={overview} className="img-fluid" alt="Overview"/>
            Overview
          </a>
          </NavLi>
        </ul>
      </nav>
    </HeaderContainer>
  );
}
 
export default Header;