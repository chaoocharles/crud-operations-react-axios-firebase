import React, { Component } from "react";
import Modal from "react-modal";
import ResultsUpdate from "./ResultsUpdate";

Modal.setAppElement("#root");

class ResultsDisplay extends Component {
  render() {
    const {
      result,
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
      <div className="allProperties">
        <span className="display">Name: {result.name}</span>
        <span className="display">Unit: {result.unit}</span>
        <span className="display">Grade: {result.grade}</span>
        <button className="remove-btn" onClick={() => handleRemove(result.id)}>
          Remove
        </button>
        <button
          className="edit-btn"
          onClick={() => {
            handleModalOpen(result.id);
          }}
        >
          Update
        </button>
        <hr />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => handleModalClose()}
          style={{
            overlay: {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            },
            content: {
              border: "none",
              background: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
          <ResultsUpdate
            name={name}
            unit={unit}
            grade={grade}
            handleModalClose={handleModalClose}
            handleUpdate={handleUpdate}
            handleChange={handleChange}
          />
        </Modal>
      </div>
    );
  }
}

export default ResultsDisplay;
