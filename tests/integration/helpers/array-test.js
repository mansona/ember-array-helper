import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent(null, 'Integration | Helper | array', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#each (array "first-item" "second-item") as |item|}}
      <span class={{item}}></span>
    {{/each}}
  `);

  assert.strictEqual(this.$('.first-item').length, 1);
  assert.strictEqual(this.$('.second-item').length, 1);
});
