function SectionTitle({ children }) {
    return React.createElement(
      "div",
      { className: "title-container" },
      React.createElement("div", { className: "line" }),
      React.createElement("h2", null, children),
      React.createElement("div", { className: "line" })
    );
  }
  
  export default SectionTitle;