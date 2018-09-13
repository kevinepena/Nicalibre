import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";
import "./Nav.css";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNavKey: "/",
      activeTab: "1"

    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.checkPage();
    window.addEventListener("hashchange", () => {
      this.setState({ selectedNavKey: document.location.hash || "/" });
    });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab

      });
    }
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
    const admin = this.props.auth.userHasScopes(["scope:admin"]);
    const homeLocation = "/";
    const location = document.location.pathname;

    return (
      <div>
        <nav className="navbar navbar-expand-lg ">

          {/* <div className="nav-left"> */}

          {/* <div className="nav-picture">
            <img
                    src={require("./coaNicaragua.png")}
                    id="navimg"
                    alt=""
                    className="navbar-brand"
                    href="/"
                  /> 
          </div> */}

          <div className="nav-left-text">
            {/* <header className="header-container">
              <h6 className="header-item h1i">¡ FreeNica !</h6>

              <h5 className="header-item h2i">
                {" "}
                <em>Happening Now</em>
              </h5>
            </header> */}
            <img src="freenicalogo.png" alt="" style={{ width: "200px" }} />
          </div>
          {/* </div> */}

          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button> */}

          <div className="collapse navbar-collapse shift" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <Nav>
                <NavItem >
                  <NavLink
                    className={classnames({ active: this.state.activeTab === "1" })}
                    onClick={() => {
                      this.toggle("1");
                    }}
                  >
                    <Link to="/" >
                      <div className="btn">
                        HOME &nbsp; &nbsp;
              <i className="fas fa-home" />
                      </div>
                    </Link>

                  </NavLink>
                </NavItem>

                <NavItem >
                  <NavLink
                    className={classnames({ active: this.state.activeTab === "2" })}
                    onClick={() => {
                      this.toggle("2");
                    }}
                  >
                    <Link to="/forum">
                      <div className="btn">

                        BLOG &nbsp;&nbsp;
              <i className="fas fa-comments" />
                      </div>
                    </Link>

                  </NavLink>
                </NavItem>

                <NavItem >
                  <NavLink
                    className={classnames({ active: this.state.activeTab === "3" })}
                    onClick={() => {
                      this.toggle("3");
                    }}
                  >
                    <Link to="/gallery">
                      <div className="btn">
                        GALLERY &nbsp;
              <i className="fas fa-camera" />
                      </div>
                    </Link>

                  </NavLink>
                </NavItem>

                <NavItem >

                  <NavLink
                    className={classnames({ active: this.state.activeTab === "4" })}
                    onClick={() => {
                      this.toggle("4");
                    }}
                  >
                    <Link to="/help">
                      <div className="btn">SUPPORT &nbsp;

              <i className="fas fa-hands-helping" />
                      </div>
                    </Link>

                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === "4" })}
                    onClick={() => {
                      console.log(loggedIn)
                      if (loggedIn) {
                        this.props.auth.logout;
                      } else {
                        this.props.auth.login;
                      }
                      this.toggle("5");
                    }}
                  >
                    {loggedIn ? (<button className="btn" onClick={this.props.auth.logout}>Log Out</button>) : (<button className="btn" onClick={this.props.auth.login} >Log In</button>)}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    {loggedIn && admin ? (
                      <Link to="/">
                        <div className="btn">Admin&nbsp; </div>
                      </Link>
                    ) : (
                        ""
                      )}
                  </NavLink>
                </NavItem>
              </Nav>

              <li className="nav-item nav-link">



                {/* 
                {loggedIn ? <Link to="/profile">Profile&nbsp;</Link> : ""} */}
              </li>
            </ul>
          </div>
        </nav>
      </div >
    );
  }
}

export default Menu;
