import React, { useState } from "react";
import { Col, Nav, Tab, Row } from "react-bootstrap";
import TabRegistration from "./Tab/TabRegistration./TabRegistration";
import TabLogin from "./Tab/TabLogin/TabLogin";

const Form = props => {
  const [activeTab, setActiveTab] = useState("first");

  return (
    <Tab.Container id="left-tabs-example" activeKey={activeTab}>
      <Row
        style={{
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link onClick={() => setActiveTab("register")} eventKey="register">
                Registration
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => setActiveTab("login")} eventKey="login">
                Login
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={4}>
          <Tab.Content>
            {activeTab === "register" && <TabRegistration setTabs={setActiveTab} />}
            {activeTab === "login" && <TabLogin />}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default Form;