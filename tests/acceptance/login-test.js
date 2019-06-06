import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | login', function(hooks) {
  setupApplicationTest(hooks);

  test('when a user logs in they end up on the team route', async function(assert) {
    await visit('/login');

    await fillIn('[data-test-login-select]', 1);

    await click('[data-test-login-button]', )

    assert.equal(currentURL(), '/teams');
  });
});
