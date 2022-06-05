import React from "react";
import Table from "react-bootstrap/esm/Table";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import { useGetCharacterQuery } from "../../redux/characterApi";
import { CharacterListItem } from "./CharacterListItem";
import { CharactersPagination } from "./CharactersPagination";
import SearchHeader from "./SearchHeader";

export const CharacterList = (props) => {
  const character = useSelector((state) => state.character.character);
  let { data, error, isLoading } = useGetCharacterQuery(character);
  
  function unique(val) {
    let x = val.map((y) => y.race);
    return [...new Set(x)];
  }

  return (
    <Col>
      <SearchHeader
        races={
          !isLoading && !error && data.docs.length !== 0
            ? unique(data.docs)
            : []
        }
      ></SearchHeader>

      <Row className="buffer">
        <Col md={12}>
          <Table bordered>
            <thead>
              <tr>
                <th className="p_color">ID</th>
                <th className="p_color">Name</th>
                <th className="p_color">Race</th>
                <th className="p_color">Gender</th>
                <th className="p_color">Actions</th>
              </tr>
            </thead>
            <tbody>
              {error ? (
                <tr>
                  <td colSpan={5}>Oh no, there was an error</td>
                </tr>
              ) : isLoading ? (
                <tr>
                  <td colSpan={5}>Loading....</td>
                </tr>
              ) : data.docs.length === 0 ? (
                <tr>
                  <td colSpan={5}>No results found refine your search....</td>
                </tr>
              ) : (
                data.docs.map((item) => (
                  <CharacterListItem
                    key={item._id}
                    id={item._id}
                    name={item.name}
                    race={item.race}
                    gender={item.gender}
                  ></CharacterListItem>
                ))
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
      <CharactersPagination
        error={error}
        isLoading={isLoading}
        pages={isLoading ? "0" : data.pages}
        page={isLoading ? "0" : data.page}
      ></CharactersPagination>
    </Col>
  );
};
