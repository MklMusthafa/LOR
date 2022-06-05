import React from "react";
import { Link } from "react-router-dom";

export const CharacterListItem = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.race}</td>
      <td>{props.gender}</td>
      <td>
        <Link to={`/character/${props.id}`}>details</Link>
      </td>
    </tr>
  );
};
