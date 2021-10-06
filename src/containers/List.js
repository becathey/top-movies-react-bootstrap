import React, { Component } from "react";
import Card from "../components/Card/Card";
const moviesJSON = require("../../src/assets/data.json");

class List extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
    };
  }
  componentDidMount() {
    if (moviesJSON) {
      this.setState({
        data: moviesJSON,
        loading: false,
      });
    }
  }
  render() {
    const { data, loading } = this.state;
    if (loading) {
      return <div>Loading ...</div>;
    }
    return (
      <div className="row">
        {data.map((movie) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={movie.id}>
            <Card key={movie.id} movie={movie} />
          </div>
        ))}
      </div>
    );
  }
}

export default List;
