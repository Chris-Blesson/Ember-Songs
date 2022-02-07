import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'
export default class CollectionsFavouritesRoute extends Route {
    @service("favourites") favouriteListService;
    model() {
        return this.favouriteListService.favourites;
    }
    resetController(controller, isExiting, transition) {
    if (isExiting) {
      controller.resetData();
    }
  }
}
