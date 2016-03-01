import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    closeTicket(ticket) {
      var params = {
        isOpen: false,
        closeTimestamp: new Date().getTime()
      };
      this.sendAction('closeTicket', ticket, params);
    }
  }
});
