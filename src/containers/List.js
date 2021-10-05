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
    return data.map((movie) => <Card key={movie.id} movie={movie} />);
  }
}

export default List;
