import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('ticket', params.ticket_id);
  },

  actions: {
    closeTicket(ticket, params) {
      var self = this;
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          ticket.set(key,params[key]);
        }
      });
      ticket.save().then(function() {
        self.transitionTo('ticket', ticket.get('id'));
      });

    }
  }
});
