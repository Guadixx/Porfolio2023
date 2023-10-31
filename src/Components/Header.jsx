import "./Header.css";

import { NavLink } from "react-router-dom";


const Header = () => {
    return (<header>
        <nav>
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/about"> About </NavLink>
          <NavLink to="/experience"> Experience </NavLink>
          <NavLink to="/game"> Game </NavLink>
        </nav>
    </header>)
  };
  
  export default Header;