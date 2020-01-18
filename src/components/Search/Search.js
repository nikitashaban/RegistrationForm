import React from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { articleSearchData, isUserAuth } from "../../ducks/main";

const Search = props => {
  const data = useSelector(state => state.main.searchedArticles);
  const dispatch = useDispatch();
  console.log(data);
  return (
    <Navbar bg="light" expand="lg">
      <Form inline>
        <FormControl
          onChange={event => dispatch(articleSearchData(event.target.value))}
          type="text"
          placeholder="Search"
          className="mr-sm-2"
        />
        <Button onClick={() => dispatch(isUserAuth(false))} variant="outline-success">
          Logout
        </Button>
      </Form>
    </Navbar>
  );
};

export default Search;
