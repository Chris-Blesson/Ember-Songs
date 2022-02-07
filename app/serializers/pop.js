import RESTSerializer from '@ember-data/serializer/rest';



export default class PopSerializer extends RESTSerializer {

    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { pop: payload };
        return super.normalizeResponse(
            store,
            primaryModelClass,
            payload,
            id,
            requestType
        );
    }
}
