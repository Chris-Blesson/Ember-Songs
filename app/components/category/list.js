import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';
import { action } from '@ember/object';

import { inject as service } from '@ember/service';
export default class CategoryListComponent extends Component {

    @tracked favourites = A([]);
    @service store;
    constructor() {
        super(...arguments);
        console.log('Focus', this.args.currentFocus);
        try {
            this.favourites = this.store.findAll('favourite', { reload: true });
        }
        catch (err) {
            console.log(err);
        }
    }
   
    get songs() {
        if ('length' in this.args.songList) {
            return this.args.songList;
        }
        else {
            return Object.values(this.args.songList);
        }
    }

    @action
    updateFavourites() {
        this.favourites = this.store.findAll('favourite', { reload: true });
    }


    get favouriteList() {
        return this.favourites;
    }



}
