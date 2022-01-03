import "./App.css";
import Splash from "./Splash";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Grids from "./Grids";
import { useState } from "react";
function App(props) {
  const [userInfo, setuserInfo] = useState({});
  console.log(userInfo);
  return (
    <Router>
      <div className="App">
        <div className="name">
          <p style={{ color: "white" }}>Word-Finder</p>
        </div>
        <Routes>
          <Route
            exact
            path="/"
            element={<Splash setuserInfo={setuserInfo} />}
          />
          <Route exact path="/new" element={<Grids userInfo={userInfo} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
