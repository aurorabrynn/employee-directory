import React from "react";
import "./style.css";

function EmployeeCard(props) {
  console.log("props:", props)
  return (
    <tbody>
      <tr>
        <th scope="row"><img src={props.image} /></th>
        <td>{props.first} {props.last}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>{props.dob}</td>
      </tr>
    </tbody>
  );
}

export default EmployeeCard;