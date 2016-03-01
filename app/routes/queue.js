import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('ticket').then(function(tickets) {
      return tickets.sortBy('openTimestamp');
    });
  }
});
