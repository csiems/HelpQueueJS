import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveTicket() {
      var params = {
        author: this.get('author'),
        location: this.get('location'),
        description: this.get('description'),
        isOpen: true,
        openTimestamp: new Date().getTime(),
        closeTimestamp: null
      };
      this.sendAction('saveTicket', params);
    }
  }
});
