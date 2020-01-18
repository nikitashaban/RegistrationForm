import React, { useEffect } from "react";
import Search from "../Search/Search";
import { articleFetchData } from "../../ducks/auth";
import { useDispatch, useSelector } from "react-redux";
import Article from "../Articles/Article/Article";

const Articles = props => {
  const data = useSelector(state => state.auth.results);
  const text = data.map(info => <Article title={info.title} text={info.text} id={info.id} />);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(articleFetchData());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Search />
      {text}
    </React.Fragment>
  );
};
export default Articles;
