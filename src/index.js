import React from "react";
import ReactDOM from "react-dom";
import List from "./containers/List";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container-fluid px-0">
      <nav className="navbar sticky-top navbar-light bg-dark">
        <div className="container-fluid">
          <h1 className="navbar-brand text-light">Top 10 Movies</h1>
        </div>
      </nav>
      <div className="container-fluid">
        <List />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
