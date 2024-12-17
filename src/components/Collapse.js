import React, { useState } from "react";
import PropTypes from "prop-types";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapsible-item ${isOpen ? "open" : ""}`}>
      <div className="collapsible-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
      </div>
      <div className="collapsible-content">
        <h4>{content}</h4>
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default Collapse;
