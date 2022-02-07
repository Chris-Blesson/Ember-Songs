import RESTSerializer from '@ember-data/serializer/rest';

export default class DanceSerializer extends RESTSerializer {
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { dance: payload };
        return super.normalizeResponse(
            store,
            primaryModelClass,
            payload,
            id,
            requestType
        );
    }
}
