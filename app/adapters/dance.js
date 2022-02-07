import RapidAPIAdapter from "./rapid-api";

export default class DanceAdapter extends RapidAPIAdapter {
    pathForType(){
        return 'genre-world/dance';
    }
}
