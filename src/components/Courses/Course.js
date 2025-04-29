function Course(props) {
  const [isHovered, setIsHovered] = React.useState(false);

  return React.createElement(
    "div",
    {
      className: "course",
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false)
    },
    React.createElement("img", { src: props.img, alt: "" }),
    React.createElement("h2", { className: "course-title" }, props.title),
    React.createElement("p", null, React.createElement("strong", null, "Рівень:"), ` ${props.level}`),
    React.createElement("p", null, React.createElement("strong", null, "Тривалість:"), ` ${props.duration}`),
    React.createElement("p", null, React.createElement("strong", null, "Викладач:"), ` ${props.teacher}`),
    React.createElement("button", {
      className: "course-start-button",
      onClick: props.onStart
    }, "Розпочати курс"),
    React.createElement(
      "div",
      { className: "course-stats-box", style: { display: isHovered ? "block" : "none" } },
      React.createElement("div", { className: "course-rating" }, ` Оцінка: ${props.rating}⭐`),
      React.createElement("div", { className: "course-participants" }, ` Учасників: ${props.participants}`)
    )
  );
}

export default Course;