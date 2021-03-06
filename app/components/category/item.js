import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service'
export default class CategoryItemComponent extends Component {

    #TYPE_MAPPING = {
        '1': 'pop',
        '2': 'dance',
        '3': 'hits',
    }
    constructor() {
        super(...arguments);
        this.getInitialStatus();

    }

    @tracked isFav = false;
    @service store;
    @service("favourites") favouriteListService;
    @service("firebase") firebaseService;
    @service("utils") utilService;

    @action
    toggleFav() {
        if (this.isFav) {
            this.removeFromFavourites();
        }
        if (!this.isFav) {
            this.addFavourites();
        }
        this.isFav = !this.isFav;
    }

    @action
    handleKeyPress(e) {
        switch (e.key) {
            case 'Esc':
            case 'Enter':
                e.preventDefault();
                this.toggleFav();
                break;
        }
    }



    get favStatus() {
        return this.isFav;
    }

    addFavourites() {
        const { id, title, subtitle, images } = this.args.item;
        this.firebaseService.addFavourites({
            [id]: { id, title, subtitle, images, type: this.#TYPE_MAPPING[this.args.currentFocus], rating: this.utilService.generateRandomNumbers(5) }
        })
        this.favouriteListService.addItemsToFavourite(this.args.item);
    }

    removeFromFavourites() {
        const { id } = this.args.item;
        this.firebaseService.removeFavourites(id);
    }
    @action
    getInitialStatus() {
        if (this.args.favourites) {
            this.isFav = this.args.favourites.any(item =>
                item.id === this.args.item.id
            );
        }
        else {
            this.isFav = false;
        }
    }


}
