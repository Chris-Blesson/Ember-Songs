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
        headers['Access-Control-Allow-Origin'] = "*";
        headers['Access-Control-Allow-Methods'] = "DELETE, POST, GET, OPTIONS";
        headers['Access-Control-Allow-Headers'] = "Origin, Content-Type, Accept, Authorization,X-Request-With";
        headers['redirect'] = "follow";

        return headers;
    }
    options(method, data = null) {
        return {
            method: method,
            timeout: 20000,
            mode: 'cors',
            headers: this.headers,
            body: data
        };
    }

    get favourites() {
        const getAllFavourites = this.host + 'favourites.json?' + `auth=${ENV.FIREBASE_AUTH}`;
        const defaultOptions = this.options("GET");
        return this.request(getAllFavourites, defaultOptions);
    }

    addFavourites(payload) {
        const addFavouritesUrl = this.host + 'favourites.json?' + `auth=${ENV.FIREBASE_AUTH}`;
        const defaultOptions = this.options("PATCH", JSON.stringify(payload));
        return this.request(addFavouritesUrl, defaultOptions);
    }

    removeFavourites(id) {
        const removeFavouritesUrl = this.host + `favourites/${id}.json?` + `auth=${ENV.FIREBASE_AUTH}`;
        const defaultOptions = this.options("DELETE");
        return this.request(removeFavouritesUrl, defaultOptions);
    }

    request(url, options) {
        return fetch(url, options);
    }

}
