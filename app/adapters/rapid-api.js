// import JSONAPIAdapter from '@ember-data/adapter/json-api';
import RESTAdapter from '@ember-data/adapter/rest';
import ENV from 'music-player/config/environment';
export default class RapidAPIAdapter extends RESTAdapter {
    host = 'https://5fedeab59708250017ce3fcf.mockapi.io';
    namespace = 'v1/charts';
    headers = {
        "x-rapidapi-host": ENV.RAPID_API_HOST,
        "x-rapidapi-key": ENV.RAPID_API_KEY,
        "offset": "4",
        "limit": "10",
        "Accept": "*/*"
    }
    

}
