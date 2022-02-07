import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class FavouritesService extends Service {

    @tracked favouriteList = [];
    addItemsToFavourite(song) {
        this.favouriteList = [...this.favouriteList, song];
    }

    get favourites(){
        return this.favouriteList;
    }
}
