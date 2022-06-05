import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { CharacterList } from "./CharacterList";

export const Characters = (props) => {
  return (
    <Container className="section">
      <Row>
        <Col md={12}>
          <div className="my-4 text-center p_color main-heading ">
            Characters
          </div>
        </Col>
      </Row>
      <CharacterList></CharacterList>
    </Container>
  );
};

export default Characters;
