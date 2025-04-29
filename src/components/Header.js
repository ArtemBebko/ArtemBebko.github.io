const Header = () => {
  return React.createElement('header', null,
    React.createElement('h1', { className: 'title' },
      React.createElement('a', { href: '/', 'data-path': '/' }, 
        React.createElement('img', { src: '/src/images/Logo.svg', alt: '' })
      )
    ),
    React.createElement('nav', null,
      React.createElement('a', { href: '/shedule', 'data-path': '/shedule', className: 'part-button' }, 'Розклад занять'),
      React.createElement('a', { href: './comments', 'data-path': '/comments', className: 'part-button' }, 'Відгуки'),
      React.createElement('a', { href: '/courses', 'data-path': '/courses', className: 'part-button' }, 'Курси'),
      React.createElement('a', { href: '/my-account', 'data-path': '/my-account', className: 'part-button' }, 'Мій кабінет')
    )
  );
};

export default Header;