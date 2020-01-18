import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Tab, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { delay } from "../../../../helpers/delay";
import styles from "./TabLogin.module.scss";
import { isUserAuth } from "../../../../ducks/main";
import { useDispatch } from "react-redux";

const TabLogin = props => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, setError } = useForm();
  const [isSubmiting, setIsSubmiting] = useState(false);

  const submitLogin = ({ enterLogin, enterPassword }) => {
    const users = JSON.parse(localStorage.getItem("users"));

    const user = users
      ? users.find(u => u.login === enterLogin && u.password === enterPassword)
      : null;
    setIsSubmiting(true);
    delay(500).then(() => {
      setIsSubmiting(false);
      if (user) {
        localStorage.setItem("isAuth", JSON.stringify(true));
        dispatch(isUserAuth(true));
        props.history.push("/articles");
      } else {
        setError("global", "incorrect", "Your password or login is incorrect");
      }
    });
  };
  return (
    <Tab.Pane eventKey="login">
      <form className={styles.Form} onSubmit={handleSubmit(submitLogin)} noValidate>
        <p>
          Login
          <input name="enterLogin" ref={register({ required: true })} type="text" required />
        </p>
        {errors.enterLogin && errors.enterLogin.type === "required" && (
          <span>This field is required</span>
        )}
        <p>
          Password
          <input name="enterPassword" ref={register({ required: true })} type="password" required />
        </p>
        {errors.enterPassword && errors.enterPassword.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.global && <span>{errors.global.message}</span>}
        {/* {error && <span>"Your password or login is incorrect"</span>} */}
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
