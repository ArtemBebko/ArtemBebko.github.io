let finishBtn = document.querySelectorAll(".course-finish-button"); 
let completedCourses = document.querySelector(".completed-courses"); 
let activeCourses = document.querySelectorAll(".active-course"); 
let progressBar = document.querySelector('.progress-bar'); 
let totalCourses = activeCourses.length; 
let completed = 0; 


finishBtn.forEach(btn => {
    btn.addEventListener("click", function() {
        this.innerText = "Пройдено";
        let parent = this.closest(".active-course");
        parent.style.background = "black"
        parent.style.color = "white"
        let img = parent.querySelector("img")
        img.style.border = "4px solid white";
        completedCourses.append(parent);
        completed++;
        updateProgress();
    });
});

function updateProgress() {
    let progressPercentage = (completed / totalCourses) * 100;
    progressBar.style.width = progressPercentage + '%'; 
}

setInterval(() => {
    if (completedCourses < totalCourses) {
        completedCourses++;
    }

    updateProgress();  
}, 5000);