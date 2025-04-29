function ActiveCourse(props) {
    const [isStatsVisible, setIsStatsVisible] = React.useState(false);
    const [isRatingVisible, setIsRatingVisible] = React.useState(false);
    const [rating, setRating] = React.useState(0);
    const [isRatingButtonVisible, setIsRatingButtonVisible] = React.useState(true);
    const [isFinished, setIsFinished] = React.useState(false);

    const handleRatingClick = () => {
        setIsRatingButtonVisible(false);
        setIsRatingVisible(true);
    };

    const handleRatingSubmit = () => {
        let newRatingSum = props.ratingSum;
        let newRatingCount = props.ratingCount;

        if (!props.hasRated) {
            newRatingSum += rating;
            newRatingCount += 1;
        } else {
            newRatingSum = newRatingSum - props.userRating + rating;
        }

        const updatedRating = (newRatingSum / newRatingCount).toFixed(1);

        props.onRatingSubmit && props.onRatingSubmit(props.id, newRatingSum, newRatingCount, updatedRating, rating);

        setIsRatingVisible(false);
        setIsRatingButtonVisible(true);
    };

    const handleCloseRating = () => {
        setIsRatingVisible(false);
        setIsRatingButtonVisible(true);
    };

    const handleSelectRating = (event) => {
        setRating(Number(event.target.value));
    };

    const handleMouseEnter = () => {
        setIsStatsVisible(true);
    };

    const handleMouseLeave = () => {
        setIsStatsVisible(false);
    };

    const handleCourseFinish = () => {
        setIsFinished(true);
        if (typeof props.onFinish === "function") {
            props.onFinish();
        }
    };

    const isCourseFinished = props.isCompleted || isFinished;

    return React.createElement(
        "div",
        {
            className: "active-course",
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            style: isCourseFinished ? { background: "black", color: "white" } : {}
        },
        React.createElement("img", {
            src: props.img,
            alt: "",
            style: isCourseFinished ? { border: "4px solid white" } : {}
        }),
        React.createElement("h2", { className: "active-course-title" }, props.title),
        React.createElement("p", null, React.createElement("strong", null, "Рівень:"), ` ${props.level}`),
        React.createElement("p", null, React.createElement("strong", null, "Тривалість:"), ` ${props.duration}`),
        React.createElement("p", null, React.createElement("strong", null, "Викладач:"), ` ${props.teacher}`),
        React.createElement("p", null, React.createElement("strong", null, "Прогрес")),
        React.createElement("div", { className: "course-progress" },
            React.createElement("div", {
                className: "course-progress-bar",
                style: isCourseFinished ? { width: "100%", border: "4px solid white" } : {}
            })
        ),
        !props.isCompleted && React.createElement(
            "button",
            {
                className: "course-finish-button",
                onClick: handleCourseFinish
            },
            isFinished ? "Пройдено" : "Курс пройдено"
        ),

        isRatingButtonVisible && React.createElement(
            "button",
            { className: "course-mark-button", onClick: handleRatingClick },
            "Оцінити"
        ),

        React.createElement(
            "div",
            { className: "course-rating-box", style: { display: isRatingVisible ? "block" : "none" } },
            React.createElement("select", { id: "course-rating", onChange: handleSelectRating },
                [1, 2, 3, 4, 5].map(n =>
                    React.createElement("option", { value: n, key: n }, `${n} ⭐`)
                )
            ),
            React.createElement("button", { className: "submit-course-rating-button", onClick: handleRatingSubmit }, "Підтвердити"),
            React.createElement("button", { className: "close-course-rating-button", onClick: handleCloseRating }, "Закрити")
        ),

        React.createElement(
            "div",
            { className: "course-stats-box", style: { display: isStatsVisible ? "block" : "none" } },
            "Оцінка: ",
            React.createElement("span", { className: "rating-value" }, props.initialRating),
            " ⭐",
            React.createElement("br"),
            "Учасників: ",
            React.createElement("span", { className: "participants-count" }, props.participants)
        )
    );
}

export default ActiveCourse;