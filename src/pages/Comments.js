const Comments = () => {
  const [comments, setComments] = React.useState(() => {
    const savedComments = localStorage.getItem('comments');
    return savedComments ? JSON.parse(savedComments) : [];
  });

  const nameRef = React.useRef(null);
  const textRef = React.useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value.trim();
    const text = textRef.current.value.trim();

    if (name === '' || text === '') return;

    const newComments = [...comments, { name, text }];
    setComments(newComments);
    localStorage.setItem('comments', JSON.stringify(newComments));

    nameRef.current.value = '';
    textRef.current.value = '';
  };

  const handleClear = () => {
    setComments([]);
    localStorage.removeItem('comments');
  };

  return React.createElement(
    'main',
    null,
    React.createElement(
      'ul',
      { id: 'comment-list' },
      comments.map((comment, index) =>
        React.createElement(
          'li',
          { key: index, className: 'comments-item' },
          React.createElement(
            'div',
            { className: 'comments-item-textbox' },
            React.createElement(
              'div',
              { className: 'comments-item-textbox-box' },
              React.createElement('h3', { className: 'comments-item-name' }, comment.name)
            )
          ),
          React.createElement('p', { className: 'comments-item-text' }, comment.text)
        )
      )
    ),
    React.createElement(
      'form',
      { id: 'comment-form', onSubmit: handleSubmit },
      React.createElement('input', {
        type: 'text',
        id: 'comment-name',
        placeholder: "Ваше ім'я",
        required: true,
        ref: nameRef,
      }),
      React.createElement('textarea', {
        id: 'comment-text',
        placeholder: "Ваш відгук",
        required: true,
        ref: textRef,
      }),
      React.createElement(
        'button',
        { type: 'submit', className: 'add-comment-button' },
        'Додати'
      )
    ),
    React.createElement(
      'button',
      { type: 'button', onClick: handleClear, className: 'clear-comments-button' },
      'Очистити'
    )
  );
};

export default Comments;
