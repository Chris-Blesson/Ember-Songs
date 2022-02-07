import RESTSerializer from '@ember-data/serializer/rest';


export default class HitSerializer extends RESTSerializer {
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { hit: payload };
        return super.normalizeResponse(
            store,
            primaryModelClass,
            payload,
            id,
            requestType
        );
    }
}
