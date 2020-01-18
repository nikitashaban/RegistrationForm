import React from "react";
import { Card } from "react-bootstrap";
import styles from "./Article.module.scss";

const Article = ({ posts }) => {
  return (
    <div className={styles.Article}>
      {posts.map(info => (
        <Card
          key={info.id}
          className="container"
          style={{
            marginTop: "10px"
          }}
        >
          <h3 className="text-primary text-center">{info.title}</h3>
          <p className="text-center">Id: {info.id}</p>
          <Card.Body>{info.text}</Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Article;
