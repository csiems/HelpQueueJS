import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  location: DS.attr(),
  description: DS.attr(),
  isOpen: DS.attr(),
  openTimestamp: DS.attr(),
  closeTimestamp: DS.attr()
});
