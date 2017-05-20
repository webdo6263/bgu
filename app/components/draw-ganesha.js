import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ganesha-container', 'black-stroke'],

  titleText: '',

  animatedText: '',

  animationComplete: false,

  didInsertElement() {
    this._super(...arguments);
    let _this = this;
    let titleText = this.get('titleText') || '';
    const TEXT_DURATION_DISPLAY = 200;
    titleText.split('').reduce((accumulator, currentValue, currentIndex) => {
      let newValue = accumulator + currentValue;
      setTimeout(() => {
        //_this.$('.page-title').text(newValue);
        _this.set('animatedText', newValue);
        if (currentIndex === titleText.length - 1) {
          setTimeout(() => {
            _this.set('animationComplete', true);
          }, TEXT_DURATION_DISPLAY);

        }
      }, ((currentIndex + 1) * TEXT_DURATION_DISPLAY));

      return newValue;
    }, '');
  }
});
