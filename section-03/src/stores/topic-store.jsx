const Api = require('../utils/api');
const Reflux = require('reflux');

const Actions = require('../actions');

module.exports = Reflux.createStore({
  listenables: [Actions],

  getTopics(topics) {
    return Api
      .get((topics || 'topics/defaults'))
      .then((json) => {
        this.topics = json.data;
        this.triggerChange();
      });
  },
  triggerChange() {
    this.trigger('change', this.topics);
  },
});
