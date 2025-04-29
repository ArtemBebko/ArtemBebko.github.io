const Progress = ({ completed, total }) => {
    const progressContainer = React.createElement("div", { className: "progress" });

    const progressBar = React.createElement("div", {
        className: "progress-bar",
        style: {
            width: `${(completed / total) * 100}%`
        }
    });

    return React.cloneElement(progressContainer, {}, progressBar);
};

export default Progress