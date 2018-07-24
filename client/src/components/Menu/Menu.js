import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import "bootstrap/dist/css/bootstrap.css";
import "./Menu.css";


export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    console.log(this.state.activeTab)
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
    console.log(this.state.activeTab)
  }
  render() {
    return (
      <div>
        <Nav tabs className="nav-tabs">
          <NavItem className=".nav-item">
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              <Link to="/" >
                Home &nbsp; &nbsp;
              <i className="fas fa-home" />
              </Link>
            </NavLink>
          </NavItem>

          <NavItem className=".nav-item">
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              What's going on! &nbsp;&nbsp;
              <i className="fas fa-comments" />
            </NavLink>
          </NavItem>

          <NavItem className=".nav-item">
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              <Link to="/gallery">
                Gallery &nbsp;
              <i className="fas fa-camera" />
              </Link>
            </NavLink>
          </NavItem>
          <NavItem className=".nav-item">
            <NavLink
              className={classnames({ active: this.state.activeTab === "4" })}
              onClick={() => {
                this.toggle("4");
              }}
            >
              <Link to="/help">
                How you can help &nbsp;
              <i className="fas fa-hands-helping" />
              </Link>
            </NavLink>
          </NavItem>

          {/* <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Moar Tabs
            </NavLink>
          </NavItem> */}
        </Nav>

        {/* <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col>
              <h4>Tab 2 Contents</h4>
              </Col>
            </Row>
          </TabPane>
        </TabContent> */}
      </div>
    );
  }
}
