import Service from '@ember/service';
import Router from '@ember/routing/router';
import { inject as service } from '@ember/service';

const AUTH_KEY = 'Shlack-auth-key';

export default class MockAuthService extends Service {

    /** @type {Router} */
    @service Router;

    currentUserId = null

    loginWithUserId(userId) {
        this.currentUserId = userId;
        this.Router.transitionTo('teams')
    }
}
