import Lesson from "../components/Shedule/Lesson.js";

const Shedule = () => {
    const [scheduleData, setScheduleData] = React.useState([
        { subject: "JavaScript", date: "12.03.2025", time: "19:00", topic: "Основи JS" },
        { subject: "Python", date: "15.03.2025", time: "17:30", topic: "Вступ до Python" },
        { subject: "C#", date: "21.03.2025", time: "18:30", topic: "Вступ до C#" },
    ]);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setScheduleData([...scheduleData]);
        }, 10000);

        return () => clearInterval(interval);
    }, [scheduleData]);

    return React.createElement(
        'div',
        { className: 'schedule' },
        scheduleData.map((lesson, index) =>
            React.createElement(Lesson, {
                key: index,
                subject: lesson.subject,
                date: lesson.date,
                time: lesson.time,
                topic: lesson.topic,
            })
        )
    );
};

export default Shedule