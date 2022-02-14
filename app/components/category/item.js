import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service'
export default class CategoryItemComponent extends Component {

    @tracked isFav = this.getInitialStatus();
    @service("favourites") favouriteListService;
    @service store;
    @action
    toggleFav() {
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
        this.favouriteListService.addItemsToFavourite(this.args.item);
    }

    async getInitialStatus() {
        let favourites = await this.store.findAll('favourite');
        favourites.map((item) => console.log(item.id, this.args.item.id));
        
        this.isFav = favourites.any(item =>
            item.id === this.args.item.id
        );
    }


}
