import ActiveCourse from "../components/Courses/ActiveCourse.js";
import Course from "../components/Courses/Course.js";
import SectionTitle from "../components/SectionTitle.js";

function Courses() {
  const initialCourses = [
    {
      id: 1,
      img: "/src/images/HTML-CSS.jpg",
      title: "HTML & CSS",
      level: "Початковий",
      duration: "2 місяці",
      teacher: "Олександр Іванов",
      rating: 3.0,
      participants: 400
    },
    {
      id: 2,
      img: "/src/images/JS.png",
      title: "JavaScript",
      level: "Середній",
      duration: "3 місяці",
      teacher: "Марія Петренко",
      rating: 4.5,
      participants: 2
    },
    {
      id: 3,
      img: "/src/images/Python.jpg",
      title: "Python",
      level: "Просунутий",
      duration: "4 місяці",
      teacher: "Дмитро Коваль",
      rating: 5.0,
      participants: 80
    },
    {
      id: 4,
      img: "/src/images/Reactt.jpg",
      title: "React",
      level: "Середній",
      duration: "2.5 місяці",
      teacher: "Анна Савченко",
      rating: 4.0,
      participants: 40
    }
  ];

  const [courses, setCourses] = React.useState(initialCourses);
  const [activeCourses, setActiveCourses] = React.useState([]);
  const [filterCategory, setFilterCategory] = React.useState(""); 
  const [filterValue, setFilterValue] = React.useState("");

  const updateCourseRating = (courseId, newRatingSum, newRatingCount, updatedRating, userRating) => {
    setActiveCourses(prevCourses =>
      prevCourses.map(course =>
        course.id === courseId
          ? { ...course, ratingSum: newRatingSum, ratingCount: newRatingCount, rating: updatedRating, hasRated: true, userRating: userRating }
          : course
      )
    );
  };

  function startCourse(course) {
    const newParticipants = course.participants + 1;
    const ratingSum = course.rating * course.participants;

    const updatedCourse = {
      ...course,
      participants: newParticipants, 
      ratingSum: ratingSum,
      ratingCount: course.participants, 
      hasRated: false,
    };

    setCourses(courses.filter(c => c.id !== course.id));
    setActiveCourses([
      ...activeCourses,
      updatedCourse
    ]);
  }

  function parseDuration(duration) {
    return parseFloat(duration); 
  }

  function sortByDuration() {
    const sorted = [...courses].sort((a, b) => parseDuration(a.duration) - parseDuration(b.duration));
    setCourses(sorted);
    setSortMode(true);
  }

  const filteredCourses = courses.filter(course => {
    if (!filterCategory || !filterValue) return true; 
    return course[filterCategory] === filterValue;
  });

  function getFilterOptions() {
    const options = new Set();
    courses.forEach(course => {
      if (filterCategory && course[filterCategory]) {
        options.add(course[filterCategory]);
      }
    });
    return Array.from(options);
  }

  return React.createElement(
    "div",
    null,
    React.createElement(SectionTitle, null, "Активні курси"),
    React.createElement(
      "div",
      { className: "active-courses" },
      ...activeCourses.map(course =>
        React.createElement(ActiveCourse, {
          key: course.id,
          ...course,
          initialRating: (course.ratingSum / course.ratingCount).toFixed(1),
          onRatingSubmit: updateCourseRating 
        })
      )
    ),
    React.createElement(SectionTitle, null, "Курси"),
    React.createElement(
      "div",
      { style: { marginBottom: "1rem" } },
      React.createElement(
        "button",
        {className : "sort-courses-by-duration-button", onClick: sortByDuration},
        "Сортувати за тривалістю"
      ),
      React.createElement(
        "select",
        {
          className : "course-sort-select",
          value: filterCategory,
          onChange: e => {
            setFilterCategory(e.target.value);
            setFilterValue(""); 
          }
        },
        React.createElement("option", { className: "course-sort-option", value: "" }, "Оберіть категорію"),
        React.createElement("option", { className: "course-sort-option", value: "teacher" }, "Викладач"),
        React.createElement("option", { className: "course-sort-option", value: "level" }, "Рівень")
      ),
      filterCategory && React.createElement(
        "select",
        {
          className : "course-sort-select",
          value: filterValue,
          onChange: e => setFilterValue(e.target.value),
          style: { marginLeft: "1rem" }
        },
        React.createElement("option", { className: "course-sort-option-value", value: "" }, "Оберіть значення"),
        ...getFilterOptions().map(option =>
          React.createElement("option", { key: option, value: option , className: "course-sort-option-value"}, option)
        )
      )
    ),
    React.createElement(
      "div",
      { className: "courses" },
      ...filteredCourses.map(course =>
        React.createElement(
          "div",
          { key: course.id },
          React.createElement(Course, {
            ...course,
            onStart: () => startCourse(course)
          })
        )
      )
    )
  );
}

export default Courses;
