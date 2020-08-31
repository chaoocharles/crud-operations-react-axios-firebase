import React, { Component } from "react";

class ResultsUpdate extends Component {
  render() {
    const {
      name,
      unit,
      grade,
      handleChange,
      handleModalClose,
      handleUpdate,
    } = this.props;

    return (
      <div className="results-edit">
        <form
          id="editResultsForm"
          className="ui-form"
          autoComplete="off"
          onSubmit={(e) => {
            handleUpdate(e);
          }}
        >
          <h2>Update Entry</h2>
          <label>Name:</label>
          <input
            name="name"
            type="text"
            required
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
          <label>Unit:</label>
          <input
            name="unit"
            type="text"
            required
            placeholder="Unit"
            value={unit}
            onChange={handleChange}
          />
          <label>Grade:</label>
          <input
            name="grade"
            type="text"
            required
            placeholder="Grade"
            value={grade}
            onChange={handleChange}
          />
          <input type="submit" value="Update" />
        </form>
        <button className="close-btn" onClick={() => handleModalClose()}>
          Close
        </button>
      </div>
    );
  }
}

export default ResultsUpdate;
