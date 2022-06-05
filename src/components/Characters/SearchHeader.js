import React from "react";
import { Col, Row, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

import {
  setName,
  setSort,
  setGender,
  setRace,
  unsetRace,
} from "../../redux/characterSlice";
import { MultiSelect } from "../shared/MultiSelector";

const SearchHeader = (props) => {
  const dispatch = useDispatch();
  function nameHandler(e) {
    dispatch(setName(e.target.value));
  }

  function sortHandler(e) {
    dispatch(setSort(e.target.value));
  }

  function raceHandler(e) {
    let isChecked = e.target.checked;
    if (isChecked) {
      dispatch(setRace(e.target.value));
    }
    if (!isChecked) {
      dispatch(unsetRace(e.target.value));
    }
  }

  function genderHandler(e) {
    dispatch(setGender(e.target.value));
  }

  return (
    <Row className>
      <Col md={6}>
        <Form.Group
          className="mb-3 d-flex justify-content-center align-items-center"
          controlId="bynamesearch"
        >
          <Form.Label className="mb-0 formlabel">Search</Form.Label>
          <Form.Control
            onChange={nameHandler}
            type="text"
            placeholder="Search character by name"
          />
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group className="mb-3 d-flex justify-content-center align-items-center">
          <Form.Label className="formlabel">Search</Form.Label>
          <Form.Select
            className=""
            onChange={sortHandler}
            aria-label="Default select example"
          >
            <option value="asc">SortBy</option>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </Form.Select>
        </Form.Group>
      </Col>
      <Col md={5}>
        <MultiSelect
          onChange={raceHandler}
          value={props.races}
          label="Search By Race"
        ></MultiSelect>
      </Col>
      <Col md={5}>
        <Form.Group className="mb-3 d-flex justify-content-center align-items-center">
          <Form.Label className="formlabel">Gender</Form.Label>
          <Form.Select
            onChange={genderHandler}
            className=""
            aria-label="Default select example"
          >
            <option value="">Select Gender menu</option>
            <option value="male,Male">Male</option>
            <option value="female,Female">Female</option>
            <option value="">Any</option>
          </Form.Select>
        </Form.Group>
      </Col>
      <Col md={2} className="d-flex justify-content-end align-items-start">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Col>
    </Row>
  );
};

export default SearchHeader;
