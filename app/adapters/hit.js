import ENV from 'music-player/config/environment';
import FirebaseAdapter from "./firebase";

export default class HitAdapter extends FirebaseAdapter {
    pathForType(){
        return `hits.json?auth=${ENV.FIREBASE_AUTH}`;
    }
}
