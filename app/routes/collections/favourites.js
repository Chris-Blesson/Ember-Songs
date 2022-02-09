import Route from '@ember/routing/route';

export default class CollectionsFavouritesRoute extends Route {

  model() {
    return this.store.findAll('favourite')
  }
  
  setupController(controller, model) {
    super.setupController(controller, model);
    controller.set('favouriteSongs', model);
  }

  resetController(controller, isExiting) {
    if (isExiting) {
      controller.resetData();
    }
  }

}
