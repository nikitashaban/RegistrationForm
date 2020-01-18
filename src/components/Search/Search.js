import React from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { articleSearchData, clearAuth } from "../../ducks/main";

const Search = props => {
  const dispatch = useDispatch();
  return (
    <Navbar bg="light" expand="lg">
      <Form inline>
        <FormControl
          onChange={event => dispatch(articleSearchData(event.target.value))}
          type="text"
          placeholder="Search"
          className="mr-sm-2"
        />
        <Button onClick={() => dispatch(clearAuth(false))} variant="outline-success">
          Logout
        </Button>
      </Form>
    </Navbar>
  );
};

export default Search;
