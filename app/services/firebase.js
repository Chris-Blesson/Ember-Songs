import Service from '@ember/service';
import ENV from 'music-player/config/environment';
import { tracked } from '@glimmer/tracking';
import fetch from 'fetch';
export default class FirebaseService extends Service {
    @tracked favouriteList = [];
    contentType = 'application/json; charset=utf-8';

    get host() {
        return `https://songs-12097-default-rtdb.firebaseio.com/`;
    }

    get headers() {
        let headers = {};
        headers['Content-Type'] = this.contentType;
        return headers;
    }
    get options() {
        return {
            method: 'GET',
            timeout: 20000,
            headers: this.headers,
            body: null
        };
    }

    get favourites() {
        const getAllFavourites = this.host + 'favourites.json?' + `auth=${ENV.FIREBASE_AUTH}`;
        const defaultOptions = this.options;
        return this.request(getAllFavourites, defaultOptions);
    }

    request(url, options) {
        return fetch(url, options);
    }

}
