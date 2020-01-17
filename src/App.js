import React from "react";
import styles from "./App.module.scss";
import { useSelector } from "react-redux";

import Form from "./components/Form";

const App = () => {
  return (
    <div className={styles.Wrapper}>
      <Form />
    </div>
  );
};

export default App;
