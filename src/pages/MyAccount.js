import ActiveCourse from "../components/Courses/ActiveCourse.js";
import Progress from "../components/MyAccount/Progress.js";

const MyAccount = () => {
    const initialActiveCoursesData = [
        {
            id: 1,
            title: "Python",
            level: "Просунутий",
            duration: "4 місяці",
            teacher: "Дмитро Коваль",
            img: "/src/images/Python.jpg",
            rating: 5.0,
            ratingSum: 5.0 * 2,
            ratingCount: 2,
            participants: 2,
            hasRated: false,
            userRating: 0,
            background: "",
            color: "",
            imageStyle: {},
            progressBarStyle: {},
        },
        {
            id: 2,
            title: "HTML & CSS",
            level: "Початковий",
            duration: "2 місяці",
            teacher: "Олександр Іванов",
            img: "/src/images/HTML-CSS.jpg",
            rating: 5.0,
            ratingSum: 5.0 * 400,
            ratingCount: 400,
            participants: 400,
            hasRated: false,
            userRating: 0,
            background: "",
            color: "",
            imageStyle: {},
            progressBarStyle: {},
        }
    ];

    const initialCompletedCourses = [];

    const [completedCourses, setCompletedCourses] = React.useState(() => {
        const saved = localStorage.getItem("completedCourses");
        return saved ? JSON.parse(saved) : initialCompletedCourses;
    });

    const [activeCoursesData, setActiveCoursesData] = React.useState(() => {
        const saved = localStorage.getItem("activeCoursesData");
        return saved ? JSON.parse(saved) : initialActiveCoursesData;
    });

    React.useEffect(() => {
        localStorage.setItem("completedCourses", JSON.stringify(completedCourses));
    }, [completedCourses]);

    React.useEffect(() => {
        localStorage.setItem("activeCoursesData", JSON.stringify(activeCoursesData));
    }, [activeCoursesData]);

    const handleFinish = (index) => {
        const finishedCourse = activeCoursesData[index];
        
        const updatedFinishedCourse = {
            ...finishedCourse,
            background: "black",
            color: "white",
            imageStyle: { border: "4px solid white" },
            progressBarStyle: { width: "100%", border: "4px solid white" },
        };

        setCompletedCourses((prev) => [...prev, updatedFinishedCourse]);

        const newActiveCourses = [...activeCoursesData];
        newActiveCourses.splice(index, 1);
        setActiveCoursesData(newActiveCourses);
    };

    const updateCourseRating = (courseId, newRatingSum, newRatingCount, updatedRating, userRating) => {
        const updateCourse = (courses) => {
            return courses.map(course =>
                course.id === courseId
                    ? {
                        ...course,
                        ratingSum: newRatingSum,
                        ratingCount: newRatingCount,
                        rating: updatedRating,
                        hasRated: true,
                        userRating
                    }
                    : course
            );
        };

        setActiveCoursesData((prev) => updateCourse(prev));
        setCompletedCourses((prev) => updateCourse(prev));
    };

    const clearLocalStorageCourses = () => {
        localStorage.removeItem("activeCoursesData");
        localStorage.removeItem("completedCourses");

        setActiveCoursesData(initialActiveCoursesData);
        setCompletedCourses(initialCompletedCourses);
    };

    return React.createElement("div", {},

        React.createElement("button", { onClick: clearLocalStorageCourses, className: "clear-completed-courses-button" }, "Очистити курси"),

        React.createElement("div", { className: "title-container" },
            React.createElement("div", { className: "line" }),
            React.createElement("h2", null, "Активні курси"),
            React.createElement("div", { className: "line" })
        ),
        React.createElement("div", { className: "active-courses" },
            activeCoursesData.map((course, i) =>
                React.createElement(ActiveCourse, {
                    key: course.id,
                    ...course,
                    initialRating: (course.ratingSum / course.ratingCount).toFixed(1),
                    onRatingSubmit: updateCourseRating, 
                    onFinish: () => handleFinish(i),
                    background: course.background,
                    color: course.color,
                    imageStyle: course.imageStyle,
                    progressBarStyle: course.progressBarStyle
                })
            )
        ),

        // Пройдені курси
        React.createElement("div", { className: "title-container" },
            React.createElement("div", { className: "line" }),
            React.createElement("h2", null, "Пройдені курси"),
            React.createElement("div", { className: "line" })
        ),
        React.createElement("div", { className: "completed-courses" },
            completedCourses.map((course, i) =>
                React.createElement(ActiveCourse, {
                    key: i,
                    ...course,
                    initialRating: (course.ratingSum / course.ratingCount).toFixed(1),
                    isCompleted: true, 
                    onRatingSubmit: updateCourseRating 
                })
            )
        ),

        React.createElement("div", { className: "title-container" },
            React.createElement("div", { className: "line" }),
            React.createElement("h2", null, "Сертифікати"),
            React.createElement("div", { className: "line" })
        ),
        React.createElement("div", { className: "certificates" },
            ["HTML & CSS", "JavaScript"].map((title, i) =>
                React.createElement("div", { className: "certificate", key: i },
                    React.createElement("h3", null, `Сертифікат: ${title}`),
                    React.createElement("a", { href: "#", className: "download-certificate-button" }, "Завантажити")
                )
            )
        ),

        // Прогрес
        React.createElement("div", { className: "title-container" },
            React.createElement("div", { className: "line" }),
            React.createElement("h2", null, "Прогрес"),
            React.createElement("div", { className: "line" })
        ),
        React.createElement(Progress, {
            completed: completedCourses.length,
            total: activeCoursesData.length + completedCourses.length
        })
    );
};

export default MyAccount;