import Route from '@ember/routing/route';

export default class MusicHitsRoute extends Route {
     model(params) {
        return this.store.peekAll('hit')
            .filterBy('id', params.hits_id);
    }

    setupController(controller, model) {
        super.setupController(controller, model);
         controller.set('song', model);
    }
}
