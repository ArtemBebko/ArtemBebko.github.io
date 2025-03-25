document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".active-course"); 

    elements.forEach(element => {
        const statsBox = element.querySelector(".course-stats-box");

        if (statsBox) {
            statsBox.style.display = "none";

            element.addEventListener("mouseenter", function () {
                statsBox.style.display = "block";
            });

            element.addEventListener("mouseleave", function () {
                statsBox.style.display = "none";
            });
        }
    });
});
