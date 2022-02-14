import RESTSerializer from '@ember-data/serializer/rest';

export default class FavouriteSerializer extends RESTSerializer {

    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { favourite: Object.values(payload) }
        
        return super.normalizeResponse(
            store,
            primaryModelClass,
            payload,
            id,
            requestType
        );
    }
}
