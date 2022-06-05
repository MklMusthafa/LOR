import React from "react";
import Pagination from "react-bootstrap/Pagination";
import { Row, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { setPage } from "../../redux/characterSlice";
import { setLimit } from "../../redux/characterSlice";

export const CharactersPagination = (props) => {
  const setPageHandler = (e) => {
    dispatch(setPage(e.target.innerText));
  };
  function limitHandler(e) {
    dispatch(setLimit(e.target.value));
    dispatch(setPage(1));
  }
  function nextHandler(e) {
    if (props.page != props.pages) dispatch(setPage(props.page + 1));
  }
  function prevHanndler(e) {
    if (props.page != 1) dispatch(setPage(props.page - 1));
  }

  const dispatch = useDispatch();
  let active = parseInt(props.page);
  let noofpages = parseInt(props.pages);
  let items = [];
  let items_split = [];
  for (let number = 1; number <= noofpages; number++) {
    items.push(
      <Pagination.Item
        onClick={setPageHandler}
        key={number}
        active={active === number ? true : false}
      >
        {number}
      </Pagination.Item>
    );
  }
  const chunkSize = 5;
  for (let i = 0; i < items.length; i += chunkSize) {
    const chunk = items.slice(i, i + chunkSize);
    items_split.push(chunk);
  }

  function curren_split(items_split) {
    for (let i = 0; i < items_split.length; i++) {
      for (let j = 0; j < items_split[i].length; j++) {
        if (items_split[i][j].key == active) return items_split[i];
      }
    }
  }

  return (
    <Row className="d-flex justify-content-between align-items-cebter">
      <Col md={8}>
        {props.isLoading ? null : (
          <Pagination>
            {active !== 1 && (
              <Pagination.Item onClick={setPageHandler}>1</Pagination.Item>
            )}
            <Pagination.Next onClick={nextHandler} />
            <Pagination.Ellipsis />
            {curren_split(items_split)}
            <Pagination.Ellipsis />
            <Pagination.Prev onClick={prevHanndler} />
            {items.length !== active && (
              <Pagination.Item onClick={setPageHandler}>
                {items.length}
              </Pagination.Item>
            )}
          </Pagination>
        )}
      </Col>
      <Col md={2}>
        <Form.Group className="mb-3 d-flex justify-content-center align-items-center">
          <Form.Label className="formlabel">Limit</Form.Label>
          <Form.Select
            className=""
            onChange={limitHandler}
            aria-label="Default select example"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </Form.Select>
        </Form.Group>
      </Col>
    </Row>
  );
};
