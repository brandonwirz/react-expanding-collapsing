import React from "react";
import "./styles.css";

const Collapse = ({ collapsed, expanded, children }) => {
  const [isCollapsed, setIsCollapsed] = React.useState("");

  return (
    <div className="container">
      <div
        className={`collapse-content ${isCollapsed ? "collapsed" : "expanded"}`}
        aria-expanded={isCollapsed}
      >
        <button
          className="collapse-button"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? "Show expanded" : "Show contracted"} content
        </button>
        {children}
      </div>
    </div>
  );
};
export default Collapse;
