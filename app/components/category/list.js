import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';
export default class CategoryListComponent extends Component {

    @tracked favourites = A([]);
    @service store;
    constructor() {
        super(...arguments);
        this.favourites = this.store.findAll('favourite');
    }
    get songs() {
        if ('length' in this.args.songList) {
            return this.args.songList;
        }
        else {
            return Object.values(this.args.songList);
        }
    }

    get favouriteList() {
        return this.favourites;
    }



}
