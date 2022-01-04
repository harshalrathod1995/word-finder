import React from "react";
import { Link } from "react-router-dom";
import "./Grid.css";

export default function Grids(props) {
  return (
    <React.Fragment>
      <div>
        <Link to="/"> Back to main Screen </Link>
      </div>
      <div className="grid">
        <div className="row">
          {props.userInfo.rows && (
            <div className="cell">{props.userInfo.rows}</div>
          )}
          {props.userInfo.col && (
            <div className="cell"> {props.userInfo.col}</div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
