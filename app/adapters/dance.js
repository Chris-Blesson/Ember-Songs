import ENV from 'music-player/config/environment';
import FirebaseAdapter from "./firebase";

export default class DanceAdapter extends FirebaseAdapter {
    pathForType(){
        return `dance.json?auth=${ENV.FIREBASE_AUTH}`;
    }
}
