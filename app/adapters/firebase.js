
import RESTAdapter from '@ember-data/adapter/rest';

export default class FirebaseAdapter extends RESTAdapter {
    host = 'https://songs-12097-default-rtdb.firebaseio.com';
    headers = {
        "Accept": "*/*",
        "content-type":"application/json"
    }
    

}
