import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | collections/playlist', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:collections/playlist');
    assert.ok(route);
  });
});
