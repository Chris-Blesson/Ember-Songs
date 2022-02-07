import Route from '@ember/routing/route';

export default class HomePopRoute extends Route {
    model(params) {
        return (this.store.query('pop', { id: (params.pop_id) }));
    }

    setupController(controller, model) {
        super.setupController(controller, model);
         controller.set('song', model);
    }
}
