import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Tab, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { delay } from "../../../../helpers/delay";
import styles from "./TabLogin.module.scss";
import { isUserAuth } from "../../../../ducks/auth";
import { useDispatch } from "react-redux";

const TabLogin = props => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const [isSubmiting, setIsSubmiting] = useState(false);

  const submitLogin = ({ enterLogin, enterPassword }) => {
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find(u => u.login === enterLogin && u.password === enterPassword);
    setIsSubmiting(true);
    delay(500).then(() => {
      setIsSubmiting(false);
      if (user) {
        dispatch(isUserAuth(true));
        console.log("success");
        props.history.push("/articles");
      } else {
        console.log("fail");
      }
    });
  };
  return (
    <Tab.Pane eventKey="login">
      <form className={styles.Form} onSubmit={handleSubmit(submitLogin)}>
        <p>
          Login
          <input name="enterLogin" ref={register({ required: true })} type="text" />
        </p>
        {errors.enterLogin && errors.enterLogin.type === "required" && (
          <span>This field is required</span>
        )}
        <p>
          Password
          <input name="enterPassword" ref={register({ required: true })} type="password" />
        </p>
        {errors.enterPassword && errors.enterPassword.type === "required" && (
          <span>This field is required</span>
        )}

        <Button
          type="submit"
          onSubmit={handleSubmit(submitLogin)}
          disabled={isSubmiting}
          variant="primary"
          size="lg"
          block
        >
          Sign in
        </Button>
      </form>
    </Tab.Pane>
  );
};
export default withRouter(TabLogin);
