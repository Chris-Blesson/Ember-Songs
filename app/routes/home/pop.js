import Route from '@ember/routing/route';

export default class HomePopRoute extends Route {
    model(params) {
        return this.store.peekAll('pop')
            .filterBy('id', params.pop_id);
    }

    setupController(controller, model) {
        super.setupController(controller, model);
        controller.set('song', model);
    }
}
