// Modal.js
import React from "react";

const Modal = ({ showModal, handleCloseModal, content }) => {
  if (!showModal) {
    return null;
  }
  return (
    <div className="modal-backdrop" onClick={handleCloseModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="close-icon" onClick={handleCloseModal}>
            X
          </span>
        </div>
        <h3>{content}</h3>
        <div className="modal-footer">
          <button type="button" className="btn" onClick={handleCloseModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
