import React from "react";
import { Card } from "react-bootstrap";

const Article = ({ posts }) => {
  return (
    <div>
      {posts.map(info => (
        <Card className="container">
          <h3 className="text-primary">{info.title}</h3>
          <p>Id: {info.id}</p>
          <Card.Body>{info.text}</Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Article;
