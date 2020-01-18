import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import Pagination from "../../helpers/Pagination";
import { articleFetchData } from "../../ducks/auth";
import { useDispatch, useSelector } from "react-redux";
import Article from "../Articles/Article/Article";

const Articles = props => {
  const data = useSelector(state => state.auth.results);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(articleFetchData());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);
  //Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indeOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = data.slice(indeOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <React.Fragment>
      <Search />
      <Article posts={currentPosts} />
      <Pagination postsPerPage={postPerPage} totalPosts={data.length} paginate={paginate} />
    </React.Fragment>
  );
};
export default Articles;
