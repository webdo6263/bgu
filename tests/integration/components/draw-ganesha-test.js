import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('draw-ganesha', 'Integration | Component | draw ganesha', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{draw-ganesha}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#draw-ganesha}}
      template block text
    {{/draw-ganesha}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
