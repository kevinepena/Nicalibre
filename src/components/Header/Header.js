// what components are we importing?

import React from "react";
import "./Header.css";


class Header extends React.Component {

  render() {
    return (
      <div className="container">
        <header className="header-container">
          
            <h6 className=" header-item h1">¡ NicaLibre !</h6>

            <h5 className="header-item h2"> <em>Happening Now</em></h5>
          
        </header>


      </div>
  
    );
  }
}

export default Header;
