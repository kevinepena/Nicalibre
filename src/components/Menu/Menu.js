import React from "react";

import { Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
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
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs className="nav-tabs">
          <NavItem className=".nav-item">
            <NavLink
             href="/"
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Home &nbsp; &nbsp;
              <i className="fas fa-home" />
            </NavLink>
          </NavItem>

          <NavItem className=".nav-item">
            <NavLink
              href="/forum"
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
             Blog &nbsp;&nbsp;
              <i className="fas fa-comments" />
            </NavLink>
          </NavItem>

          <NavItem className=".nav-item">
            <NavLink
              href="/gallery"
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              Gallery &nbsp;
              <i className="fas fa-camera" />
            </NavLink>
          </NavItem>
          <NavItem className=".nav-item">
            <NavLink
              href="/help"
              className={classnames({ active: this.state.activeTab === "4" })}
              onClick={() => {
                this.toggle("4");
              }}
            >
              How you can help &nbsp;
              <i className="fas fa-hands-helping" />
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
