import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ganesha-container', 'black-stroke'],

  titleText: '',

  didInsertElement() {
    this._super(...arguments);
    let _this = this;
    const TEXT_DURATION_DISPLAY = 200;
    this.get('titleText').split('').reduce((accumulator, currentValue, currentIndex) => {
      let newValue = accumulator + currentValue;
      setTimeout(() => {
        _this.$('.page-title').text(newValue);
      }, ((currentIndex + 1) * TEXT_DURATION_DISPLAY));

      return newValue;
    }, '');
  }
});
