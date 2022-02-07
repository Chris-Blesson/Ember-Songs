import RapidAPIAdapter from "./rapid-api";

export default class PopAdapter extends RapidAPIAdapter {
    pathForType(){
        return 'genre-world/pop';
    }
}
