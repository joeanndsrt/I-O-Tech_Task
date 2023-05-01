import React from 'react'
import { Link } from "react-router-dom";

const Class = ({ classes }) => {
  return (
    <>
      {classes && classes.map((c) => (
        c.id && // check if the id is not null or undefined
        <tr key={c.id}>
          <td>{c.title}</td>
          <td>{c.description}</td>
          <td>{c.coach_name}</td>
          <td>{c.coach_brief}</td>
          <td>{c.timing}</td>
          <td>{c.price}</td>
          {/* BUTTON BELOW FOR EDIT CLASSES PAGE */}
          {/* <td>
            <Link
              to={`/classes/${c.id}`}
              className="btn btn-primary me-2"
            >
              View
            </Link>
            <Link
              to={`/classes/edit/${c.id}`}
              className="btn btn-warning me-2"
            >
              Edit
            </Link>
            <button
              className="btn btn-danger"
              
            >
              Delete
            </button>
          </td> */}
        </tr>
      ))}
    </>
  )
}

export default Class;
