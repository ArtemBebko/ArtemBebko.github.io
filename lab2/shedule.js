function updateSchedule() 
{
    let scheduleData = [
        { subject: "JavaScript", date: "12.03.2025", time: "19:00", topic: "Основи JS" },
        { subject: "Python", date: "15.03.2025", time: "17:30", topic: "Вступ до Python" },
        { subject: "C#", date: "21.03.2025", time: "18:30", topic: "Вступ до C#" },
    ];

    const scheduleContainer = document.querySelector(".schedule");
    scheduleContainer.innerHTML = ""; 

    console.log("Оновлення розкладу...");
    console.log("Час оновлення:", new Date().toLocaleTimeString());

    let i = 0;
    do 
    {
        const lesson = scheduleData[i];
        const lessonElement = document.createElement("div");
        lessonElement.classList.add("lesson");
        lessonElement.innerHTML = `
            <div class="lesson-details">
                <p><strong>Предмет:</strong> ${lesson.subject}</p>
                <p><strong>Дата:</strong> ${lesson.date}</p>
                <p><strong>Час:</strong> ${lesson.time}</p>
                <p><strong>Тема:</strong> ${lesson.topic}</p>
            </div>
        `;
        scheduleContainer.appendChild(lessonElement);
        i++;
    } while (i < scheduleData.length);
}

setInterval(updateSchedule, 10000);
updateSchedule();