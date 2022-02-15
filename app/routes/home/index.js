import Route from '@ember/routing/route';

export default class IndexRoute extends Route {


    async beforeModel() {
        super.beforeModel(...arguments);
        let popList = await this.store.findAll('pop');
        let hitsList = await this.store.findAll('hit');
        let danceList = await this.store.findAll('dance');
        return { popList, danceList, hitsList };


    }

    setupController(controller, model) {
        super.setupController(controller, model);
        
        controller.set('popList', model.popList);
        controller.set('hitsList', model.hitsList);
        controller.set('danceList', model.danceList);
    }
}
