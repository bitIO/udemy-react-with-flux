const React = require('react');
const Dropdown = require('./dropdown');

const options = {
  title: 'Choos a dessert',
  items: [
    'Apple Pie', 'Peach Cabbler', 'Coconut Cream Pie',
  ],
};

const element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.container'));
