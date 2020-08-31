import React, { Component } from "react";
import ResultsDisplay from "./ResultsDisplay";

class ResultsFetch extends Component {
  render() {
    const {
      results,
      handleRemove,
      handleUpdate,
      handleChange,
      handleModalOpen,
      handleModalClose,
      name,
      unit,
      grade,
      modalIsOpen,
    } = this.props;
    return (
      <div className="results-display">
        <h2>{results.length} - Results Found</h2>
        {results.map((result) => (
          <ResultsDisplay
            name={name}
            unit={unit}
            grade={grade}
            modalIsOpen = {modalIsOpen}
            result={result}
            key={result.id}
            handleRemove={handleRemove}
            handleUpdate={handleUpdate}
            handleChange={handleChange}
            handleModalOpen={handleModalOpen}
            handleModalClose={handleModalClose}
          />
        ))}
      </div>
    );
  }
}

export default ResultsFetch;
