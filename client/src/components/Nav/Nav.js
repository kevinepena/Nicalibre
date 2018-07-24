import React, { Component } from "react";
import { BrowserRouter as  Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {

      selectedNavKey: "/"

    };
   
  }

  componentDidMount() {
    this.checkPage();
    window.addEventListener('hashchange', () => {
      this.setState({ selectedNavKey: document.location.hash || '/' });
    })
  }

 

  checkPage() {
    const homeLocation = "/";
    const location = document.location.pathname;

    if (location !== homeLocation) {
      console.log(`This is your Route location: ${location}`);
    } else {
      console.log(`this is the home route --> ${homeLocation}`);
    }
  }


  render() {
    const loggedIn = this.props.auth.isAuthenticated();
    // const canWrite = this.props.auth.userHasScopes([
    //   "write:blog",
    //   "roles: admin"
    // ]);
    const homeLocation = "/";
    const location = document.location.pathname;

    return (
      <div>

        <nav className="navbar navbar-expand-lg">
          <img
            src={require("./coaNicaragua.png")}
            id="navimg"
            alt=""
            className="navbar-brand"
            href="/"
          />

  
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse shift" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item nav-link">
              {location === homeLocation ? ("") :(
                <Link to="/">
                  <button className="btn" onClick={this.props.auth.logout}>
                    Home
                  </button>
                </Link>
              )
              }
                
              </li>

              <li className="nav-item nav-link">
                {!loggedIn ? (
                  <button className="btn" onClick={this.props.auth.login}>
                    Log In
                  </button>
                ) : (
                  <button className="btn" onClick={this.props.auth.logout}>
                    Log Off
                  </button>
                )}

                {/* {loggedIn && canWrite ? (
                  <Link to="/createpost">
                    <button>Create a Post&nbsp; </button>
                  </Link>
                ) : (
                  ""
                )}
                {loggedIn ? <Link to="/profile">Profile&nbsp;</Link> : ""} */}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
