import { useState } from "react";
import React from "react";
import Grids from "./Grids";
import { Link } from "react-router-dom";

function Splash(props) {
  const [rows, setRow] = useState([]);
  const [col, setCol] = useState([]);

  const onChangerc = (e) => {
    switch (e.target.id) {
      case "rows":
        setRow(e.target.value);
        break;
      case "col":
        setCol(e.target.value);
        break;
    }
  };

  const handleButton = (e) => {
    e.preventDefault();
    console.log(rows, col);
    props.setuserInfo({ rows, col });
  };

  return (
    <React.Fragment>
      <form className="gridName" onSubmit={handleButton}>
        <label>Add Rows</label>
        <input id="rows" type="number" value={rows} onChange={onChangerc} />
        <label>Add Columns</label>
        <input id="col" value={col} type="number" onChange={onChangerc} />

        <button type="submit">
          <Link to="/new">Start Game</Link>
        </button>
      </form>
      {/* {rows > 0 && <Grids rows={rows} col={col} />} */}
    </React.Fragment>
  );
}

export default Splash;
