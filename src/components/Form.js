import React, { useState } from "react";
import { Col, Nav, Tab, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { delay } from "../helpers/delay";
import styles from "./Form.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const Form = props => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const onSubmit = values => {
    setIsSubmiting(true);
    const updUsers = JSON.parse(localStorage.getItem("users")) || [];
    delay(500)
      .then(() => updUsers.push(values))
      .then(() => localStorage.setItem("users", JSON.stringify(updUsers)))
      .then(() => setIsSubmiting(false));
  };

  const { register, handleSubmit, errors, watch } = useForm();
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
              <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
                <p>
                  Login
                  <input name="login" ref={register({ required: true })} type="text" />
                </p>
                {errors.login && errors.login.type === "required" && (
                  <span>This field is required</span>
                )}
                <p>
                  Email
                  <input name="email" ref={register({ required: true })} type="email" />
                </p>
                {errors.email && errors.email.type === "required" && (
                  <span>This field is required</span>
                )}
                <p>
                  Password
                  <input
                    name="password"
                    ref={register({ required: true, minLength: 6, maxLength: 12 })}
                    type="password"
                  />
                </p>
                {errors.password && errors.password.type === "minLength" && (
                  <span>Your password have to be more than 6 symbols and less than 12 symbols</span>
                )}
                {errors.password && errors.password.type === "required" && (
                  <span>This field is required</span>
                )}
                <p>
                  Re-enter password
                  <input
                    name="secondPas"
                    ref={register({
                      required: true,
                      validate: value => {
                        return value === watch("password");
                      }
                    })}
                    type="password"
                  />
                </p>
                {errors.secondPas && <span>The password is not the same</span>}

                <Button disabled={isSubmiting} type="submit" variant="primary" size="lg" block>
                  Sign up
                </Button>
              </form>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              {" "}
              <form className={styles.Form}>
                <p>
                  Login
                  <input ref={register} type="text" />
                </p>
                <p>
                  Password
                  <input ref={register} type="password" />
                </p>
                <Button variant="primary" size="lg" block>
                  Sign in
                </Button>
              </form>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default Form;
