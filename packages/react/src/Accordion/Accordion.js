import React, { useState } from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import "./Accordion.css";
import questions from "./questions";

const Component = ({ title, info, id }) => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow((prev) => !prev);
  };

  return (
    <div key={id} className="accordion">
      <div className="accordion-title">
        <h3>{title}</h3>
        <button onClick={toggle} className="accordion-icon">
          {show ? "-" : "+" }
        </button>
      </div>
      {show && <p className="accordion-info">{info}</p>}
    </div>
  );
}

Component.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

const Accordion = () => {
  return (
    <div className="App">
      <h1>Accordion</h1>
      {questions.map((question) => (
        <Component key={question.id} {...question} />
      ))}
    </div>
  );
}

export default Accordion;
