import RapidAPIAdapter from "./rapid-api";

export default class HitAdapter extends RapidAPIAdapter {
    pathForType(){
        return 'genre-world/hits';
    }
}
