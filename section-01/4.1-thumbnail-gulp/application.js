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

const Badge = React.createClass({displayName: "Badge",
  render() {
    return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
      this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
    )
  }
});

const ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render() {
    const list = this.props.thumbnailData.map((thumbnailProps) => {
      return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
    });
    return React.createElement("div", null, list)
  }
});

const Thumbnail = React.createClass({displayName: "Thumbnail",
  render() {
    return React.createElement("div", {className: "col-sm-6 col-md-4"}, 
      React.createElement("div", {className: "thumbnail"}, 
        React.createElement("img", {src: this.props.imageUrl}), 
        React.createElement("div", {className: "caption"}, 
          React.createElement("h3", null, this.props.header), 
          React.createElement("p", null, this.props.description), 
          React.createElement("p", null, 
            React.createElement(Badge, {title: this.props.title, number: this.props.number})
          )
        )
      )
    )
  }
});
