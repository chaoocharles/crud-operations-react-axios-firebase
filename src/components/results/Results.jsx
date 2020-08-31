import React, { Component } from "react";
import ResultsAdd from "./ResultsAdd";
import ResultsFetch from "./ResultsFetch";
import instance from "../../firebase/instance";
import { trackPromise } from "react-promise-tracker";
import { toast } from "react-toastify";

class Results extends Component {
  state = {
    results: [],
    name: "",
    unit: "",
    grade: "",
    modalIsOpen: false,
  };

  componentDidMount() {
    trackPromise(
      instance.get("/results.json").then((response) => {
        const fetchedResults = [];

        for (let key in response.data) {
          fetchedResults.push({
            ...response.data[key],
            id: key,
          });
        }

        this.setState({
          results: fetchedResults,
        });
      })
    );
  }

  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handlePost = (e) => {
    e.preventDefault();

    const Data = {
      name: this.state.name,
      unit: this.state.unit,
      grade: this.state.grade,
    };

    trackPromise(
      instance.post("./results.json", Data).then((response) => {
        console.log(response);

        const results = [
          ...this.state.results,
          { ...Data, id: response.data.name },
        ];

        this.setState({
          results: results,
          name: "",
          unit: "",
          grade: "",
        });

        toast.success("You added a new entry!");
      })
    );
  };

  handleRemove = (id) => {
    instance.delete(`results/${id}.json`).then((response) => {
      console.log(response.data);
    });

    this.setState({
      results: this.state.results.filter((result) => result.id !== id),
    });

    toast.error("Entry Removed!");
  };

  handleModalOpen = (id) => {
    const result = this.state.results.find((result) => result.id === id);

    this.setState({
      name: result.name,
      unit: result.unit,
      grade: result.grade,
      id: result.id,
      modalIsOpen: true,
    });
  };

  handleModalClose = () => {
    this.setState({
      name: "",
      unit: "",
      grade: "",
      modalIsOpen: false,
    });
  };

  handleUpdate = (e) => {
    e.preventDefault();

    this.setState({
      modalIsOpen: false,
    });

    const Data = {
      name: this.state.name,
      unit: this.state.unit,
      grade: this.state.grade,
    };

    trackPromise(
      instance.put(`results/${this.state.id}.json`, Data).then((response) => {
        console.log(response);

        instance.get("/results.json").then((response) => {
          const fetchedResults = [];

          for (let key in response.data) {
            fetchedResults.push({
              ...response.data[key],
              id: key,
            });
          }

          this.setState({
            results: fetchedResults,
            name: "",
            unit: "",
            grade: "",
          });
          toast.info("Entry Updated!")
        });
      })
    );
  };

  render() {
    const { results, name, unit, grade, modalIsOpen } = this.state;
    return (
      <div className="container">
        <ResultsAdd
          name={name}
          unit={unit}
          grade={grade}
          handleChange={this.handleChange}
          handlePost={this.handlePost}
        />
        <ResultsFetch
          name={name}
          unit={unit}
          grade={grade}
          modalIsOpen={modalIsOpen}
          results={results}
          handleRemove={this.handleRemove}
          handleChange={this.handleChange}
          handleModalOpen={this.handleModalOpen}
          handleModalClose={this.handleModalClose}
          handleUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default Results;
