const options = {
  thumbnailData: [
    {
      title: 'Inbox',
      number: 32,
      header: 'Learn React',
      description: 'sime text',
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
// ask react to render this class
const element = React.createElement(ThumbnailList, options);

// when we ask react to render this class, we will tell it where to place the
// rendered element in the dom
ReactDOM.render(element, document.querySelector('.container'));
