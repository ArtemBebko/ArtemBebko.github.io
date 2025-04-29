import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Comments from './pages/Comments.js';
import Schedule from './pages/Shedule.js';
import Courses from './pages/Courses.js';
import MyAccount from './pages/MyAccount.js';
import Index from './Index.js';

const routes = {
  '/': Index,
  '/shedule': Schedule,
  '/comments': Comments,
  '/courses': Courses,
  '/my-account': MyAccount
};

const App = () => {
  const getCurrentPath = () => {
    return window.location.hash.replace('#', '') || '/';
  };

  const render = () => {
    const path = getCurrentPath();
    const Page = routes[path] || Index;
    const content = React.createElement(Page);
    const container = document.getElementById('content');
    if (container) {
      ReactDOM.render(content, container);
    }
  };

  const handleNavigation = (event) => {
    event.preventDefault();
    const path = event.currentTarget.getAttribute('data-path');
    window.location.hash = path; 
  };

  window.addEventListener('hashchange', render);

  setTimeout(() => {
    const links = document.querySelectorAll('a[data-path]');
    links.forEach(link => {
      link.addEventListener('click', handleNavigation);
    });
    render(); 
  }, 0);

  return React.createElement(React.Fragment, null,
    React.createElement(Header, null),
    React.createElement('main', { id: 'content' }),
    React.createElement(Footer, null)
  );
};

export default App;