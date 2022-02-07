import Route from '@ember/routing/route';

export default class HomeHitsRoute extends Route {
     model(params) {
        return (this.store.query('hit', { id: (params.hits_id) }));
    }

    setupController(controller, model) {
        super.setupController(controller, model);
         controller.set('song', model);
    }
}
