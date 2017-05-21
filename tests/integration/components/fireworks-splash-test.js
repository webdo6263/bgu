import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fireworks-splash', 'Integration | Component | fireworks splash', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fireworks-splash}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fireworks-splash}}
      template block text
    {{/fireworks-splash}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
