function Index() {
  const infoBlocks = [
    {
      title: 'Чому саме ми?',
      text: 'Ми пропонуємо найкращі курси з практичним підходом і досвідченими викладачами, щоб ви могли швидко здобути нові навички.',
      img: '/src/images/Why-us.jpg'
    },
    {
      title: 'Що пропонують наші курси?',
      text: 'Наші курси охоплюють різні мови програмування, які є перспективними.',
      img: '/src/images/What-our-courses-give.png'
    },
    {
      title: 'Хто наші викладачі?',
      text: 'Наші викладачі – це досвідчені професіонали в своїй галузі, які подають знання з практичним підходом.',
      img: '/src/images/Who-is-our-mentors.jpg'
    },
    {
      title: 'Контакти?',
      text: 'Зв\'яжіться з нами через електронну пошту або за телефоном.',
      img: '/src/images/Contacts.jpg'
    },
    {
      title: 'Де працюють наші студенти?',
      text: 'Наші випускники працюють у компаніях, таких як Google, Microsoft та інші.',
      img: '/src/images/Where-our-students-work.jpg'
    }
  ];

  const infoBlockElements = infoBlocks.map((block, index) =>
    React.createElement('div', { className: 'info-block', key: index }, [
      React.createElement('h2', {}, block.title),
      React.createElement('p', {}, block.text),
      React.createElement('img', { src: block.img, alt: '' })
    ])
  );

  return React.createElement('main', {}, 
    React.createElement('div', { className: 'info-blocks' }, infoBlockElements)
  );
  
}

export default Index;