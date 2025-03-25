document.addEventListener("DOMContentLoaded", function () {
    const startButtons = document.querySelectorAll(".course-start-button");
    const activeCoursesContainer = document.querySelector(".active-courses");

    startButtons.forEach(button => {
        button.addEventListener("click", function () {
            const courseElement = this.closest(".course");
        
            const ratingText = courseElement.querySelector(".course-rating").textContent.trim();
            const rating = parseFloat(ratingText.split(": ")[1]) || 0;
        
            const participantsText = courseElement.querySelector(".course-participants").textContent.trim();
            const participants = parseInt(participantsText.replace(/\D/g, ""), 10) || 0; 
            const participants2 = participants + 1;
        
            const activeCourse = document.createElement("div");
            activeCourse.classList.add("active-course");
            activeCourse.innerHTML = `
                <img src="${courseElement.querySelector("img").src}" alt="">
                <h2 class="active-course-title">${courseElement.querySelector(".course-title").textContent}</h2>
                <p><strong>Рівень:</strong> ${courseElement.querySelector("p").textContent.split(": ")[1]}</p>
                <p><strong>Тривалість:</strong> ${courseElement.querySelectorAll("p")[1].textContent.split(": ")[1]}</p>
                <p><strong>Викладач:</strong> ${courseElement.querySelectorAll("p")[2].textContent.split(": ")[1]}</p>
                <button class="course-finish-button">Курс пройдено</button>
                <div class="course-stats-box">
                    Оцінка: ${rating} ⭐<br>
                    Учасників: ${participants2}
                </div>
            `;
        

            activeCoursesContainer.appendChild(activeCourse);
            courseElement.remove();

            const statsBox = activeCourse.querySelector(".course-stats-box");
            if (statsBox) {
                statsBox.style.display = "none";

                activeCourse.addEventListener("mouseenter", function () {
                    statsBox.style.display = "block";
                });

                activeCourse.addEventListener("mouseleave", function () {
                    statsBox.style.display = "none";
                });
            }
            else{
                console.log("null");
            }

            activeCourse.querySelector(".course-finish-button").addEventListener("click", function () {
                activeCourse.style.background = "black";
                activeCourse.style.color = "white";
                this.textContent = "Пройдено";
                let img = activeCourse.querySelector("img");
                img.style.border = "4px solid white";
            });
        });
    });
});