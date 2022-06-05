import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

import { useGetCharacterByIdQuery } from "../../redux/characterApi";

export const CharacterDetail = (props) => {
  let params = useParams();
  let { data, error, isLoading } = useGetCharacterByIdQuery(params.charId);
  if (!isLoading) {
    console.log(data);
  }
  return (
    <Container className="section">
      <Row>
        <Col md={12}>
          <div className="text-center p_color main-heading my-4">
            Characters {">"} ABC
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          {error ? (
            <>Error occured</>
          ) : isLoading ? (
            <>Loading....</>
          ) : (
            data && (
              <>
                <ul>
                  <li>Name:{data.docs[0].name}</li>
                  <li>WikiUrl:{data.docs[0].wikiUrl}</li>
                  <li>Race:{data.docs[0].race}</li>
                  <li>Gender:{data.docs[0].gender}</li>
                  <li>Height:{data.docs[0].height}</li>
                  <li>Hair:{data.docs[0].hair}</li>
                  <li>Realm:{data.docs[0].realm}</li>
                  <li>Birth:{data.docs[0].birth}</li>
                  <li>Spouse:{data.docs[0].spouse}</li>
                  <li>Death:{data.docs[0].death}</li>
                </ul>
                <Link to="/">
                  {" "}
                  <Button>Close</Button>
                </Link>
              </>
            )
          )}
        </Col>
      </Row>
    </Container>
  );
};
