import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "./Menu.css";

class Menu extends Component {
  checkPage() {
    const homeLocation = "/";
    const location = this.props.location.pathname;

    if (location !== homeLocation) {
      console.log(`This is your Route location: ${location}`);
    } else {
      console.log("this is the home route");
    }
  }

  render() {
    return (
      <div>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              data-toggle="tab"
              id="home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
              href="/"
            >
              Home &nbsp; &nbsp;
              <i className="fas fa-home" />
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="tab"
              id="forum"
              role="tab"
              aria-controls="forum"
              aria-selected="true"
              href="/forum"
            >
              Forum &nbsp;
              <i className="fas fa-comments" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="tab"
              id="gallery"
              role="tab"
              aria-controls="gallery"
              aria-selected="true"
              href="/gallery"
            >
              Gallery &nbsp;
              <i className="fas fa-camera" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="tab"
              id="donations"
              role="tab"
              aria-controls="donations"
              aria-selected="true"
              href="/help"
            >
              Donations &nbsp;
              <i className="fas fa-hands-helping" />
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="tab"
              id="contact"
              role="tab"
              aria-controls="contact"
              aria-selected="true"
              href="/contact"
            >
              Contact &nbsp;
              <i className="fas fa-at" />
            </a>
          </li>
        </ul>

        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <Link to="/" />
          </div>
          <div
            className="tab-pane fade"
            id="forum"
            role="tabpanel"
            aria-labelledby="forum-tab"
          >
            Be sure to include direct Link to page here
            {/* <Forum/> */}
          </div>
          <div
            className="tab-pane fade"
            id="gallery"
            role="tabpanel"
            aria-labelledby="gallery-tab"
          >
            Be sure to include direct Link to page here
            <Link to="/gallery" />
          </div>
          <div
            className="tab-pane fade"
            id="donations"
            role="tabpanel"
            aria-labelledby="donations-tab"
          >
            Be sure to include direct Link to page here
            <Link to="/donations" />
          </div>
          <div
            className="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            {/* <Link to="/contact"/> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
