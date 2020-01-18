import React from "react";
import { Card } from "react-bootstrap";

const Article = ({ text, title, id }) => {
  return (
    <Card>
      <h3>{title}</h3>
      <p>Id: {id}</p>
      <Card.Body>{text}</Card.Body>
    </Card>
  );
};

export default Article;
