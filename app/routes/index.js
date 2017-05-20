import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    didTransition() {
      Ember.run.schedule('afterRender', () => {
        Ember.$('body').addClass('intro-route');
      });
    },
    willTransition() {
      Ember.run.schedule('afterRender', () => {
        Ember.$('body').removeClass('intro-route');
      });
    }
  }  
});
