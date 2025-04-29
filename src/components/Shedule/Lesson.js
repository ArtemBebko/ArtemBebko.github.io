const Lesson = ({ subject, date, time, topic }) => {
    return React.createElement(
        'div',
        { className: 'lesson' },
        React.createElement(
            'div',
            { className: 'lesson-details' },
            React.createElement('p', null, React.createElement('strong', null, `Предмет: `), subject),
            React.createElement('p', null, React.createElement('strong', null, `Дата: `), date),
            React.createElement('p', null, React.createElement('strong', null, `Час: `), time),
            React.createElement('p', null, React.createElement('strong', null, `Тема: `), topic)
        )
    );
};

export default Lesson