import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | collections/favourites', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:collections/favourites');
    assert.ok(route);
  });
});
