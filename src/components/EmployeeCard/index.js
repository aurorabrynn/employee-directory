import React from "react";
import "./style.css";

function EmployeeCard(props) {
  //console.log("props:", props)
  return (
    <tr>
      <th scope="row"><img src={props.image} alt={props.first}/></th>
      <td>{props.first} {props.last}</td>
      <td>{props.phone}</td>
      <td><a href={`mailto:${props.email}`}>{props.email}</a></td>
      <td>{props.dob}</td>
    </tr>
  );
}

export default EmployeeCard;