import React, { useState } from "react";
import { Form } from "react-bootstrap";

export const MultiSelect = (props) => {
  const [view, setView] = useState(true);

  function viewHandler() {
    setView(!view);
  }
  return (
    <>
      <Form.Group
        onClick={viewHandler}
        className="mb-3 d-flex justify-content-center align-items-center"
        controlId="bynamesearch"
      >
        <Form.Label className="mb-0 formlabel">
          {props.label ? props.label : "Label"}
        </Form.Label>
        <Form.Control disabled type="text" placeholder="filter By Race" />
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-center align-items-start flex-column">
        {(props.value ? props.value : []).map((x, i) => {
          return (
            <Form.Check
              onChange={props.onChange}
              className={`${view ? "d-none" : ""}`}
              key={i}
              value={x}
              label={x}
              name={x}
              type="checkbox"
              id={`inline-checkbox-1${i}`}
            />
          );
        }
        )}
        <Form.Check
              onChange={props.onChange}
              className={`${view ? "d-none" : ""}`}
              key=""
              value="any"
              label="Any"
              name="Any"
              type="checkbox"
              id={`inline-checkbox-1-Any`}
            />
      </Form.Group>
    </>
  );
};
