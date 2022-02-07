import ENV from 'music-player/config/environment';
import FirebaseAdapter from "./firebase";

export default class PopAdapter extends FirebaseAdapter {
    pathForType() {
        return `pop.json?auth=${ENV.FIREBASE_AUTH}`;
    }
}
