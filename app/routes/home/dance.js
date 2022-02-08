import Route from '@ember/routing/route';

export default class HomeDanceRoute extends Route {

    model(params) {

        return this.store.peekAll('dance')
            .filterBy('id', params.dance_id);
    }

    setupController(controller, model) {
        super.setupController(controller, model);
        controller.set('song', model);
    }
}
