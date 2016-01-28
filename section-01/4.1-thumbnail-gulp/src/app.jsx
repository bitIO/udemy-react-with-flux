const React = require('react');
const ThumbnailList = require('./thumbnail-list');

const options = {
  thumbnailData: [
    {
      title: 'Inbox',
      number: 32,
      header: 'Learn React',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut \
      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut \
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt \
      mollit anim id est laborum.',
      imageUrl: 'http://formatjs.io/img/react.svg',
    },
    {
      title: 'Show courses',
      number: 12,
      header: 'Learn Gulp',
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore`,
      imageUrl: 'http://devstickers.com/assets/img/pro/jv81.png',
    },
  ],
};

const element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.container'));
