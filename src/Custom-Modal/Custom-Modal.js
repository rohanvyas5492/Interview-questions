// CustomModal.js
import React, { useState } from "react";
import Modal from "./Modal";

import "./Custom-Modal.css";

const CustomModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container">
      <button
        type="submit"
        className="btn"
        onClick={() => setShowModal((prevState) => !prevState)}
      >
        Open Modal
      </button>
      <Modal
        showModal={showModal}
        content={"Model Opened"}
        handleCloseModal={() => setShowModal(false)}
      />
    </div>
  );
};

export default CustomModal;
