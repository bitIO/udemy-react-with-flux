const Thumbnail = require('thumbnail');

const ThumbnailList = React.createClass({
  render() {
    const list = this.props.thumbnailData.map((thumbnailProps) => {
      return <Thumbnail {...thumbnailProps}/>
    });
    return <div>{list}</div>
  }
});
