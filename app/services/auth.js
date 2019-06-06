import Service from '@ember/service';
import Router from '@ember/routing/router';
import { inject as service } from '@ember/service';

const AUTH_KEY = 'Shlack-auth-key';

export default class AuthService extends Service {
    // log someone in
    // save current user to local storage
    /** @type {Router} */
    @service Router;

    get currentUserId() {
        return window.localStorage.getItem(AUTH_KEY);
    }

    loginWithUserId(userId) {
        window.localStorage.setItem(AUTH_KEY, userId);
        this.Router.transitionTo('teams')
    }


    // keep track of who someone is

    // log someone out

}
