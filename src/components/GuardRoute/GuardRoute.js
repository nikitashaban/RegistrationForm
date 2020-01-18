import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const GuardRoute = ({ children }) => {
  const isAuth = useSelector(({ main }) => main.isAuth);
  return isAuth ? children : <Redirect to="/" />;
};

export default GuardRoute;
