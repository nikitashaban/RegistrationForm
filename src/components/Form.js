import React from "react";
import { Col, Nav, Tab, Row } from "react-bootstrap";
import styles from "./Form.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const Form = props => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row
        style={{
          width: "100%",
          height: 300,
          justifyContent: "center"
        }}
      >
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Registration</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Login</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={4}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <form className={styles.Form}>
                <p>
                  Login
                  <input type="text" />
                </p>
                <p>
                  Email
                  <input type="email" />
                </p>
                <p>
                  Password
                  <input type="password" />
                </p>
                <p>
                  Re-enter password
                  <input type="password" />
                </p>
              </form>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              {" "}
              <form className={styles.Form}>
                <p>
                  Login
                  <input type="text" />
                </p>
                <p>
                  Password
                  <input type="password" />
                </p>
              </form>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default Form;
